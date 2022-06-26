import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_JOB_MUTATION = gql`
  mutation DeleteJobMutation($id: Int!) {
    deleteJob(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Job = ({ job }) => {
  const [deleteJob] = useMutation(DELETE_JOB_MUTATION, {
    onCompleted: () => {
      toast.success('Job deleted')
      navigate(routes.adminJobs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete job ' + id + '?')) {
      deleteJob({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Job {job.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{job.id}</td>
            </tr><tr>
              <th>Title</th>
              <td>{job.title}</td>
            </tr><tr>
              <th>City</th>
              <td>{job.city}</td>
            </tr><tr>
              <th>Salary</th>
              <td>{job.salary}</td>
            </tr><tr>
              <th>Description</th>
              <td>{job.description}</td>
            </tr><tr>
              <th>Employer</th>
              <td>{job.employer}</td>
            </tr><tr>
              <th>Longitude</th>
              <td>{job.longitude}</td>
            </tr><tr>
              <th>Latitude</th>
              <td>{job.latitude}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditJob({ id: job.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(job.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Job
