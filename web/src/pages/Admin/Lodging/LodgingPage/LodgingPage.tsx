import LodgingCell from 'src/components/Admin/Lodging/LodgingCell'

type LodgingPageProps = {
  id: number
}

const LodgingPage = ({ id }: LodgingPageProps) => {
  return <LodgingCell id={id} />
}

export default LodgingPage
