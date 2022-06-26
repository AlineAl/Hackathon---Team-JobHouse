import type { EditLessorById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LessorForm from 'src/components/Admin/Lessor/LessorForm'

export const QUERY = gql`
  query EditLessorById($id: Int!) {
    lessor: lessor(id: $id) {
      id
      name
    }
  }
`
const UPDATE_LESSOR_MUTATION = gql`
  mutation UpdateLessorMutation($id: Int!, $input: UpdateLessorInput!) {
    updateLessor(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ lessor }: CellSuccessProps<EditLessorById>) => {
  const [updateLessor, { loading, error }] = useMutation(UPDATE_LESSOR_MUTATION, {
    onCompleted: () => {
      toast.success('Lessor updated')
      navigate(routes.adminLessors())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateLessor({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Lessor {lessor.id}</h2>
      </header>
      <div className="rw-segment-main">
        <LessorForm lessor={lessor} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
