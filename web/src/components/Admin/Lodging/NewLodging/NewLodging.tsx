import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LodgingForm from 'src/components/Admin/Lodging/LodgingForm'

const CREATE_LODGING_MUTATION = gql`
  mutation CreateLodgingMutation($input: CreateLodgingInput!) {
    createLodging(input: $input) {
      id
    }
  }
`

const NewLodging = () => {
  const [createLodging, { loading, error }] = useMutation(CREATE_LODGING_MUTATION, {
    onCompleted: () => {
      toast.success('Lodging created')
      navigate(routes.adminLodgings())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createLodging({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Lodging</h2>
      </header>
      <div className="rw-segment-main">
        <LodgingForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLodging
