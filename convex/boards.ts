import { v } from 'convex/values'
import { getAllOrThrow } from 'convex-helpers/server/relationships'
import { query } from './_generated/server'

export const get = query({
  args: {
    orgId: v.string(),
    search: v.optional(v.string()),
    favorites: v.optional(v.string()),
  },
  handler: async (context, args) => {
    const identity = await context.auth.getUserIdentity()

    if (!identity) {
      throw new Error('Unauthorized')
    }

    if (args.favorites) {
      const favoritedBoards = await context.db
        .query('userFavorites')
        .withIndex('by_user_org', (query) =>
          query.eq('userId', identity.subject).eq('orgId', args.orgId)
        )
        .order('desc')
        .collect()

      const ids = favoritedBoards.map((board) => board.boardId)

      const boards = await getAllOrThrow(context.db, ids)

      return boards.map((board) => ({ ...board, isFavorite: true }))
    }

    const title = args.search as string
    let boards = []

    if (title) {
      boards = await context.db
        .query('boards')
        .withSearchIndex('search_title', (query) =>
          query.search('title', title).eq('orgId', args.orgId)
        )
        .collect()
    } else {
      boards = await context.db
        .query('boards')
        .withIndex('by_org', (query) => query.eq('orgId', args.orgId))
        .order('desc')
        .collect()
    }

    const boardsWithFavoriteRelation = boards.map((board) => {
      return context.db
        .query('userFavorites')
        .withIndex('by_user_board', (query) =>
          query.eq('userId', identity.subject).eq('boardId', board._id)
        )
        .unique()
        .then((favorite) => {
          return { ...board, isFavorite: !!favorite }
        })
    })

    const boardsWithFavoriteBoolean = Promise.all(boardsWithFavoriteRelation)
    return boardsWithFavoriteBoolean
  },
})
