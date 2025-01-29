import { Canvas } from './_components/canvas'
import { Room } from '@/components/room'
import { Loading } from './_components/loading'

interface BoardIdPageProps {
  params: {
    boardId: Promise<string>
  }
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <Room roomId={params.boardId.toString()} fallback={<Loading />}>
      <Canvas boardId={params.boardId.toString()} />
    </Room>
  )
}

export default BoardIdPage
