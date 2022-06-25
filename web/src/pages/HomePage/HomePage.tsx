// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {
  Form,
  Submit,
  SelectField,
  SubmitHandler,
  useForm,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'

import background from '/public/img/background.png'

const jobs = [
  { id: 1, name: 'tech' },
  { id: 2, name: 'salade' },
  { id: 3, name: 'tomate' },
  { id: 4, name: 'oignon' },
  { id: 5, name: 'sauce' },
]

const departments = [
  { id: 1, name: 'Ain' },
  { id: 2, name: 'Aisne' },
  { id: 3, name: 'Loiret' },
  { id: 4, name: 'Yvelines' },
  { id: 5, name: 'Iles-de-France' },
]

interface FormValues {
  input: string
}

const HomePage = () => {
  const formMethods = useForm()
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
              >
                {jobs.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.name}
                  </option>
                ))}
                <option value="job">Rechercher un job</option>
              </SelectField>

              <SelectField
                className="rounded-xl bg-white px-2"
                name="departement"
                id="departement"
              >
                {departments.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
                <option value="departement"> departement </option>
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
