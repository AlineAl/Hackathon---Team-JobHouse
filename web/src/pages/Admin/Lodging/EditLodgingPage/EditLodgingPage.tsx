import EditLodgingCell from 'src/components/Admin/Lodging/EditLodgingCell'

type LodgingPageProps = {
  id: number
}

const EditLodgingPage = ({ id }: LodgingPageProps) => {
  return <EditLodgingCell id={id} />
}

export default EditLodgingPage
