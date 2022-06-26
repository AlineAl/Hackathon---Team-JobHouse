// import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useQuery } from '@redwoodjs/web'
import {
  Form,
  Submit,
  SelectField,
  SubmitHandler,
  useForm,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'

import DepartmentsCell from 'src/components/DepartmentsCell'

import background from '/public/img/background.png'

export const JOBS_QUERY = gql`
  query {
    jobs {
      id
      title
    }
  }
`

interface FormValues {
  input: string
}

const HomePage = () => {
  const formMethods = useForm()
  const { data } = useQuery(JOBS_QUERY)

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    navigate(routes.resultsPage(data))
  }
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-cover h-screen"
      >
        <div>
          <div className="flex justify-center pt-10 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <h1 className="text-center mb-2 text-6xl">JobHouse</h1>
          </div>

          <Form formMethods={formMethods} onSubmit={onSubmit}>
            <div className="flex justify-center mb-6">
              <SelectField
                className="rounded-xl bg-white mr-5 p-1 px-2 "
                name="job"
                id="job"
                placeholder="Recherche"
              >
                <option value="all">Rechercher un job</option>
                {data &&
                  data.jobs.map((job) => (
                    <option key={job.id} value={job.id}>
                      {job.title}
                    </option>
                  ))}
              </SelectField>

              <SelectField
                className="rounded-xl bg-white px-2"
                name="departement"
                id="departement"
              >
                <option value="all">Département</option>
                <DepartmentsCell />
              </SelectField>
            </div>
            <div className=" flex justify-center  ">
              <Submit className="rounded-xl mr-2 bg-white px-2">Save</Submit>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default HomePage
