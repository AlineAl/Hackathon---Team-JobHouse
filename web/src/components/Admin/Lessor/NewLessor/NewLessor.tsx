import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LessorForm from 'src/components/Admin/Lessor/LessorForm'

const CREATE_LESSOR_MUTATION = gql`
  mutation CreateLessorMutation($input: CreateLessorInput!) {
    createLessor(input: $input) {
      id
    }
  }
`

const NewLessor = () => {
  const [createLessor, { loading, error }] = useMutation(CREATE_LESSOR_MUTATION, {
    onCompleted: () => {
      toast.success('Lessor created')
      navigate(routes.adminLessors())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createLessor({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Lessor</h2>
      </header>
      <div className="rw-segment-main">
        <LessorForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLessor
