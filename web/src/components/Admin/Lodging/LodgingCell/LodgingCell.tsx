import type { FindLodgingById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Lodging from 'src/components/Admin/Lodging/Lodging'

export const QUERY = gql`
  query FindLodgingById($id: Int!) {
    lodging: lodging(id: $id) {
      id
      url
      area
      price
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Lodging not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ lodging }: CellSuccessProps<FindLodgingById>) => {
  return <Lodging lodging={lodging} />
}
