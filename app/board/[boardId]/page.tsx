/* eslint-disable @typescript-eslint/no-explicit-any */

import { Canvas } from './_components/canvas'
import { Room } from '@/components/room'
import { Loading } from './_components/loading'
import { Metadata } from 'next'

// interface BoardIdPageProps {
//   params: {
//     boardId: string
//   }
// }

export const metadata: Metadata = {
  title: {
    absolute: 'Board',
  },
}

const BoardIdPage = async (props: any) => {
  const params = await props.params
  const boardId = params.boardId

  return (
    <Room roomId={boardId} fallback={<Loading />}>
      <Canvas boardId={boardId} />
    </Room>
  )
}

export default BoardIdPage
