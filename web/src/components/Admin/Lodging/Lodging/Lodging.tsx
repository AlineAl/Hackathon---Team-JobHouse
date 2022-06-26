import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_LODGING_MUTATION = gql`
  mutation DeleteLodgingMutation($id: Int!) {
    deleteLodging(id: $id) {
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

const Lodging = ({ lodging }) => {
  const [deleteLodging] = useMutation(DELETE_LODGING_MUTATION, {
    onCompleted: () => {
      toast.success('Lodging deleted')
      navigate(routes.adminLodgings())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete lodging ' + id + '?')) {
      deleteLodging({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Lodging {lodging.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{lodging.id}</td>
            </tr><tr>
              <th>Url</th>
              <td>{lodging.url}</td>
            </tr><tr>
              <th>Type</th>
              <td>{lodging.Type}</td>
            </tr><tr>
              <th>Area</th>
              <td>{lodging.area}</td>
            </tr><tr>
              <th>City</th>
              <td>{lodging.city}</td>
            </tr><tr>
              <th>Price</th>
              <td>{lodging.price}</td>
            </tr><tr>
              <th>Description</th>
              <td>{lodging.description}</td>
            </tr><tr>
              <th>Longitude</th>
              <td>{lodging.longitude}</td>
            </tr><tr>
              <th>Latitude</th>
              <td>{lodging.latitude}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditLodging({ id: lodging.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(lodging.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Lodging
