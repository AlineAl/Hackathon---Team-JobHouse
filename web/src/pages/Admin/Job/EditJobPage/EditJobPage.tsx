import EditJobCell from 'src/components/Admin/Job/EditJobCell'

type JobPageProps = {
  id: number
}

const EditJobPage = ({ id }: JobPageProps) => {
  return <EditJobCell id={id} />
}

export default EditJobPage
