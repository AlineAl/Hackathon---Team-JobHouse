import type { DepartmentsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query DepartmentsQuery {
    departments {
      id
      code
      city
    }
  }
`

export const Loading = () => <option>Loading...</option>

export const Empty = () => <option>Empty</option>

export const Failure = (_: CellFailureProps) => (
  <option className="text-red-500">Error</option>
)

export const Success = ({
  departments,
}: CellSuccessProps<DepartmentsQuery>) => {
  return (
    <>
      {departments.map((item) => {
        return (
          <option key={item.id} value={item.code}>
            {item.city}
          </option>
        )
      })}
    </>
  )
}
