import { FaMapMarkerAlt, FaEuroSign } from 'react-icons/fa'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useQuery } from '@redwoodjs/web'

import NavBar from 'src/components/NavBar/NavBar'

export const JOBS_QUERY = gql`
  query JobsQuery {
    jobs {
      id
      title
      city
      salary
      description
    }
  }
`

const JobCard = ({ data }) => {
  return (
    <Link
      to={routes.jobPage()}
      className="w-72 border rounded-lg p-6 mr-6 mb-6"
    >
      <h2 className="text-xl font-bold">{data.title}</h2>
      <div className="flex items-center mt-4">
        <FaMapMarkerAlt />
        <p>{data.city}</p>
      </div>
      <div className="flex items-center mt-4 bg-gray-300 rounded-full p-2">
        <p>{data.salary}</p>
        <FaEuroSign />
      </div>
      <p className="text-sm mt-4 text-gray-500">{data.description}</p>
    </Link>
  )
}

const ResultsPagePage = () => {
  const { data } = useQuery(JOBS_QUERY)
  console.log(data)
  return (
    <>
      <MetaTags title="ResultsPage" description="ResultsPage page" />
      <NavBar />
      <section className="my-12 mx-12">
        <h1 className="text-2xl mb-6">Résultats de votre recherche</h1>
        <div className="flex justify-between">
          <div className="flex flex-wrap">
            {data &&
              data.jobs.map((item) => {
                return <JobCard key={item.id} data={item} />
              })}
          </div>
        </div>
      </section>
    </>
  )
}

export default ResultsPagePage
