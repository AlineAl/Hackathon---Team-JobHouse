import LessorCell from 'src/components/Admin/Lessor/LessorCell'

type LessorPageProps = {
  id: number
}

const LessorPage = ({ id }: LessorPageProps) => {
  return <LessorCell id={id} />
}

export default LessorPage
