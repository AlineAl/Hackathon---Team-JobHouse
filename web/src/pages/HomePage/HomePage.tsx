import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import  background  from "../../../../web/public/img/background.png"


const HomePage = () => {

  return (

    <>

      <MetaTags title="Home" description="Home page" />

      <div style={{ backgroundImage: `url(${background})` }} >

        <div className='flex justify-center mt-10 mb-6'>

          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <h1 className='text-center mb-2 text-6xl'>JobHouse</h1>

        </div>



        <div className="flex justify-center mb-6">

          <select className='rounded-xl bg-red-500 mr-5 p-1 px-2 ' name="job" id="job">
            {/*{jobs.map((job) =>*/}
              <option value ="job">Rechercher un job</option>
          </select>


          <select className='rounded-xl bg-red-500 px-2' name="departement" id="departement">
            {/*{departements.map((departement) =>*/}
              <option value="departement"> departement </option>
          </select>

        </div>

        <div className=' flex justify-center  bg-red-500' >


          <button className='mr-2'>Rechercher </button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
          </svg>

        </div>

      </div>

    </>

  )

}

export default HomePage
