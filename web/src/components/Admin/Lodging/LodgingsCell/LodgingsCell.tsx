import type { FindLodgings } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Lodgings from 'src/components/Admin/Lodging/Lodgings'

export const QUERY = gql`
  query FindLodgings {
    lodgings {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No lodgings yet. '}
      <Link
        to={routes.adminNewLodging()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ lodgings }: CellSuccessProps<FindLodgings>) => {
  return <Lodgings lodgings={lodgings} />
}
