import { FaEuroSign, FaMapMarkerAlt } from 'react-icons/fa'

import { useParams } from '@redwoodjs/router'
import { MetaTags, useQuery } from '@redwoodjs/web'

// import JobCells from 'src/components/JobsCell'

export const JOBS_QUERY = gql`
  query Jobs {
    jobs {
      id
      title
      salary
      description
    }
  }
`

const ResultsPagePage = () => {
  const { job: searchedJob } = useParams()
  const { data, loading, error } = useQuery(JOBS_QUERY, {
    variables: searchedJob,
  })

  const filteredJobs = data?.jobs.filter((job) => job.title === searchedJob)
  console.log(data)

  return (
    <>
      <MetaTags title="ResultsPage" description="ResultsPage page" />

      <section className="my-12 mx-12">
        <h1 className="text-2xl mb-6">Résultats de votre recherche</h1>
        <div className="flex justify-between">
          {/* <JobCells filters={search} /> */}
          {error && <div> error... </div>}
          {loading && <div> loading... </div>}
          {data && (
            <ul className="flex flex-wrap">
              {filteredJobs.map((item) => {
                return (
                  <li key={item.id}>
                    <div className="w-72 border rounded-lg p-6 mr-6 mb-6">
                      <h2 className="text-xl font-bold">{item.title}</h2>
                      <div className="flex items-center mt-4">
                        <FaMapMarkerAlt />
                        <p>{item.city}</p>
                      </div>
                      <div className="flex items-center mt-4 bg-gray-300 rounded-full p-2">
                        <p>{`Salaire de ${item.salary}`}</p>
                        <FaEuroSign />
                      </div>
                      <p className="text-sm mt-4 text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}

export default ResultsPagePage
