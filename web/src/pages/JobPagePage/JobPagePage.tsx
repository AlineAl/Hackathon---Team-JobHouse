import { FaMapMarkerAlt, FaEuroSign } from 'react-icons/fa'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

import { MetaTags } from '@redwoodjs/web'

import lodImage from '/public/img/AdobeStock_129250388.jpeg'

import NavBar from 'src/components/NavBar/NavBar'

const JobPagePage = () => {
  return (
    <>
      <MetaTags title="JobPage" description="JobPage page" />
      <NavBar />
      <section className="flex justify-around mx-28 my-12">
        <div className="w-[60%] p-6">
          <h1 className="text-2xl font-bold">Nom du poste</h1>
          <p className="flex items-center text-xl mt-4">
            <FaMapMarkerAlt /> Ville
          </p>
          <p className="flex items-center text-xl mt-4">
            <FaEuroSign /> 1500 / mois
          </p>
          <p className="mt-4">
            Donec condimentum ex pretium odio feugiat suscipit. Nullam quis
            aliquam nisl. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Nulla enim risus, ultrices
            sit amet lacus sit amet, fringilla luctus mauris. Phasellus maximus
            et elit auctor convallis. Quisque condimentum, tortor vel tincidunt
            convallis, diam lorem convallis elit, ut tristique erat massa id
            justo. Phasellus lorem purus, placerat et tempus commodo, pharetra
            id dui. Maecenas eros nibh, rutrum a mollis scelerisque, faucibus ac
            velit. Donec blandit dignissim mollis. Morbi gravida laoreet
            sodales. Quisque dictum hendrerit magna, ut varius purus hendrerit
            in. Proin fringilla felis a sapien rutrum aliquet. Mauris augue
            enim, fermentum eu sapien sed, scelerisque egestas neque. Fusce sit
            amet eleifend leo, ac pellentesque lectus. Mauris lobortis molestie
            varius. Morbi sed turpis ultrices, eleifend purus et, interdum
            magna. In vulputate dapibus faucibus. In hac habitasse platea
            dictumst. Duis sodales, sapien nec viverra ultricies, sapien tortor
            mattis elit, eu viverra velit leo eget lacus. Sed tincidunt
            tristique tristique.
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={2}
          scrollbar={true}
          grabCursor
          direction="vertical"
          className="w-60 h-[40rem]"
        >
          <div>
            <SwiperSlide className="w-60 rounded-lg border mb-4">
              <img className="w-full rounded-t-lg" src={lodImage} alt="" />
              <div className="p-6">
                <p>Type de logement</p>
                <p>Superficie</p>
                <p>Ville</p>
                <div className="flex items-center">
                  <p>400</p>
                  <FaEuroSign />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-60 rounded-lg border mb-4">
              <img className="w-full rounded-t-lg" src={lodImage} alt="" />
              <div className="p-6">
                <p>Type de logement</p>
                <p>Superficie</p>
                <p>Ville</p>
                <div className="flex items-center">
                  <p>400</p>
                  <FaEuroSign />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-60 rounded-lg border mb-4">
              <img className="w-full rounded-t-lg" src={lodImage} alt="" />
              <div className="p-6">
                <p>Type de logement</p>
                <p>Superficie</p>
                <p>Ville</p>
                <div className="flex items-center">
                  <p>400</p>
                  <FaEuroSign />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-60 rounded-lg border mb-4">
              <img className="w-full rounded-t-lg" src={lodImage} alt="" />
              <div className="p-6">
                <p>Type de logement</p>
                <p>Superficie</p>
                <p>Ville</p>
                <div className="flex items-center">
                  <p>400</p>
                  <FaEuroSign />
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </section>
    </>
  )
}

export default JobPagePage
