import { FaMapMarkerAlt, FaEuroSign } from 'react-icons/fa'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import NavBar from 'src/components/NavBar/NavBar'

const JobCard = () => {
  return (
    <Link
      to={routes.jobPage()}
      className="w-72 border rounded-lg p-6 mr-6 mb-6"
    >
      <h2 className="text-xl font-bold">Secrétaire médicale en hôpital</h2>
      <div className="flex items-center mt-4">
        <FaMapMarkerAlt />
        <p>Lille</p>
      </div>
      <div className="flex items-center mt-4 bg-gray-300 rounded-full p-2">
        <p>salaire de 1000</p>
        <FaEuroSign />
      </div>
      <p className="text-sm mt-4 text-gray-500">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas...
      </p>
    </Link>
  )
}

const ResultsPagePage = () => {
  return (
    <>
      <MetaTags title="ResultsPage" description="ResultsPage page" />
      <NavBar />
      <section className="my-12 mx-12">
        <h1 className="text-2xl mb-6">Résultats de votre recherche</h1>
        <div className="flex justify-between">
          <div className="flex flex-wrap">
            {Array(21)
              .fill(0)
              .map((_item, i) => (
                <JobCard key={i} />
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ResultsPagePage
