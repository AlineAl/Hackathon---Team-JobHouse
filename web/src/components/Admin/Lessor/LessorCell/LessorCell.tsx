import type { FindLessorById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Lessor from 'src/components/Admin/Lessor/Lessor'

export const QUERY = gql`
  query FindLessorById($id: Int!) {
    lessor: lessor(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Lessor not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ lessor }: CellSuccessProps<FindLessorById>) => {
  return <Lessor lessor={lessor} />
}
