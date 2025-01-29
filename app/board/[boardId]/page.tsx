import { Canvas } from './_components/canvas'
import { Room } from '@/components/room'
import { Loading } from './_components/loading'

// interface BoardIdPageProps {
//   params: {
//     boardId: string
//   }
// }

const BoardIdPage = async (props: any) => {
  const params = await props.params
  const boardId = params.boardId
  console.log(boardId)

  return (
    <Room roomId={boardId} fallback={<Loading />}>
      <Canvas boardId={boardId} />
    </Room>
  )
}

export default BoardIdPage
