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

import background from '/public/img/tom-rumble-7lvzopTxjOU-unsplash.jpg'
import logo from '/public/img/trouve_ton_toit__1_-removebg-preview.png'

export const JOBS_QUERY = gql`
  query JobsQuery {
    lodgings {
      id
      Type
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
    navigate(routes.lodgingPage(data))
  }
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-cover h-screen flex justify-center items-center"
      >
        <div className="bg-zinc-50/80 p-10 w-min">
          <div className="flex flex-col items-center text-center pt-10 mb-6">
            <img src={logo} alt="" />
            <p className="text-3xl text-black font-bold">
              Trouvez votre logement
            </p>
          </div>

          <Form formMethods={formMethods} onSubmit={onSubmit}>
            <div className="flex justify-center mb-6">
              <SelectField
                className="rounded-xl bg-white mr-5 p-1 px-2 "
                name="job"
                id="job"
                placeholder="Recherche"
              >
                <option value="all">Rechercher un logement</option>
                {data &&
                  data.lodgings.map((lodging) => (
                    <option key={lodging.id} value={lodging.id}>
                      {lodging.Type}
                    </option>
                  ))}
              </SelectField>

              <SelectField
                className="rounded-xl bg-white px-4"
                name="departement"
                id="departement"
              >
                <option value="all">Département</option>
                <DepartmentsCell />
              </SelectField>
            </div>
            <div className=" flex justify-center  ">
              <Submit className="rounded-xl mr-2 bg-white px-4">
                Rechercher
              </Submit>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default HomePage
