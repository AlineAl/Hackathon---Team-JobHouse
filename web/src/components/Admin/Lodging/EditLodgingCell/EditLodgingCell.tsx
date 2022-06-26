import type { EditLodgingById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LodgingForm from 'src/components/Admin/Lodging/LodgingForm'

export const QUERY = gql`
  query EditLodgingById($id: Int!) {
    lodging: lodging(id: $id) {
      id
      url
      Type
      area
      city
      price
      description
      longitude
      latitude
    }
  }
`
const UPDATE_LODGING_MUTATION = gql`
  mutation UpdateLodgingMutation($id: Int!, $input: UpdateLodgingInput!) {
    updateLodging(id: $id, input: $input) {
      id
      url
      Type
      area
      city
      price
      description
      longitude
      latitude
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ lodging }: CellSuccessProps<EditLodgingById>) => {
  const [updateLodging, { loading, error }] = useMutation(UPDATE_LODGING_MUTATION, {
    onCompleted: () => {
      toast.success('Lodging updated')
      navigate(routes.adminLodgings())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateLodging({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Lodging {lodging.id}</h2>
      </header>
      <div className="rw-segment-main">
        <LodgingForm lodging={lodging} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
