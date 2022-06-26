import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/Lodging/LodgingsCell'

const DELETE_LODGING_MUTATION = gql`
  mutation DeleteLodgingMutation($id: Int!) {
    deleteLodging(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const LodgingsList = ({ lodgings }) => {
  const [deleteLodging] = useMutation(DELETE_LODGING_MUTATION, {
    onCompleted: () => {
      toast.success('Lodging deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete lodging ' + id + '?')) {
      deleteLodging({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Url</th>
            <th>Area</th>
            <th>Price</th>
            <th>Description</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {lodgings.map((lodging) => (
            <tr key={lodging.id}>
              <td>{truncate(lodging.id)}</td>
              <td>{truncate(lodging.url)}</td>
              <td>{truncate(lodging.area)}</td>
              <td>{truncate(lodging.price)}</td>
              <td>{truncate(lodging.description)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminLodging({ id: lodging.id })}
                    title={'Show lodging ' + lodging.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditLodging({ id: lodging.id })}
                    title={'Edit lodging ' + lodging.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete lodging ' + lodging.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(lodging.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LodgingsList
