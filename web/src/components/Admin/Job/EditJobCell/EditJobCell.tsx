import type { EditJobById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import JobForm from 'src/components/Admin/Job/JobForm'

export const QUERY = gql`
  query EditJobById($id: Int!) {
    job: job(id: $id) {
      id
      title
      salary
      description
      employer
    }
  }
`
const UPDATE_JOB_MUTATION = gql`
  mutation UpdateJobMutation($id: Int!, $input: UpdateJobInput!) {
    updateJob(id: $id, input: $input) {
      id
      title
      salary
      description
      employer
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ job }: CellSuccessProps<EditJobById>) => {
  const [updateJob, { loading, error }] = useMutation(UPDATE_JOB_MUTATION, {
    onCompleted: () => {
      toast.success('Job updated')
      navigate(routes.adminJobs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateJob({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Job {job.id}</h2>
      </header>
      <div className="rw-segment-main">
        <JobForm job={job} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
