import { FaEuroSign, FaMapMarkerAlt } from 'react-icons/fa'
import type { JobsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query JobsQuery {
    jobs {
      id
      title
      salary
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ jobs }: CellSuccessProps<JobsQuery>) => {
  return (
    <ul className="flex flex-wrap">
      {jobs.map((item) => {
        return (
          <li key={item.id}>
            <div className="w-72 border rounded-lg p-6 mr-6 mb-6">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <div className="flex items-center mt-4">
                <FaMapMarkerAlt />
                {/* <p>{item.city}</p> */}
              </div>
              <div className="flex items-center mt-4 bg-gray-300 rounded-full p-2">
                <p>{`Salaire de ${item.salary}`}</p>
                <FaEuroSign />
              </div>
              <p className="text-sm mt-4 text-gray-500">{item.description}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
