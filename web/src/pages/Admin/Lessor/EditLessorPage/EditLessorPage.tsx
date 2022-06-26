import EditLessorCell from 'src/components/Admin/Lessor/EditLessorCell'

type LessorPageProps = {
  id: number
}

const EditLessorPage = ({ id }: LessorPageProps) => {
  return <EditLessorCell id={id} />
}

export default EditLessorPage
