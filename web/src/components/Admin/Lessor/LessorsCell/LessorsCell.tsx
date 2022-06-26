import type { FindLessors } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Lessors from 'src/components/Admin/Lessor/Lessors'

export const QUERY = gql`
  query FindLessors {
    lessors {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No lessors yet. '}
      <Link
        to={routes.adminNewLessor()}
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

export const Success = ({ lessors }: CellSuccessProps<FindLessors>) => {
  return <Lessors lessors={lessors} />
}
