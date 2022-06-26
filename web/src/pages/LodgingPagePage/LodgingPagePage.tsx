import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Link } from '@redwoodjs/router'
import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import 'swiper/css'
import 'swiper/css/navigation'

import NavBar from 'src/components/NavBar/NavBar'

import image1 from '/public/img/AdobeStock_243643016.jpeg'
import image4 from '/public/img/AdobeStock_243643016.jpeg'
import image2 from '/public/img/AdobeStock_257275647.jpeg'
import image6 from '/public/img/AdobeStock_292854875.jpeg'
import image3 from '/public/img/AdobeStock_366363160.jpeg'
import image5 from '/public/img/AdobeStock_371383825.jpeg'
import avatar from '/public/img/avatar1.png'

const LodgingPagePage = () => {
  return (
    <>
      <MetaTags title="LodgingPage" description="LodgingPage page" />
      <NavBar />
      <section className="my-12 mx-6">
        <h1 className="text-2xl ml-6 mb-6">Logements à proximité</h1>
        <p className="ml-6 mb-6 text-gray-500">
          Les meilleurs logements correspondant à vos critères
        </p>
        <div className="flex justify-between">
          <div className="flex flex-wrap justify-around w-[60%]">
            <Link to={routes.lodgingDescription()}>
              <div className="w-72 rounded-lg">
                <div className="relative z-0">
                  <img
                    className="w-full bg-cover rounded-lg"
                    src={image1}
                    alt=""
                  />
                </div>
                <div className="relative border flex flex-col m-auto rounded-lg w-64 p-6 bg-white top-[-30px] z-40">
                  <p className="text-xl mb-2">Eiusmod tempor incididunt</p>
                  <p className="mb-2 text-gray-500">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptate
                  </p>
                  <hr />
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <img src={avatar} alt="" />
                      <p className="ml-2">Clara Bertoletti</p>
                    </div>
                    <p>10 Sep</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={routes.lodgingDescription()}>
              <div className="w-72 rounded-lg">
                <div className="relative z-0">
                  <img
                    className="w-full bg-cover rounded-lg"
                    src={image6}
                    alt=""
                  />
                </div>
                <div className="relative border flex flex-col m-auto rounded-lg w-64 p-6 bg-white top-[-30px] z-40">
                  <p className="text-xl mb-2">Eiusmod tempor incididunt</p>
                  <p className="mb-2 text-gray-500">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptate
                  </p>
                  <hr />
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <img src={avatar} alt="" />
                      <p className="ml-2">Clara Bertoletti</p>
                    </div>
                    <p>10 Sep</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={routes.lodgingDescription()}>
              <div className="w-72 rounded-lg">
                <div className="relative z-0">
                  <img
                    className="w-full bg-cover rounded-lg"
                    src={image2}
                    alt=""
                  />
                </div>
                <div className="relative border flex flex-col m-auto rounded-lg w-64 p-6 bg-white top-[-30px] z-40">
                  <p className="text-xl mb-2">Eiusmod tempor incididunt</p>
                  <p className="mb-2 text-gray-500">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptate
                  </p>
                  <hr />
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <img src={avatar} alt="" />
                      <p className="ml-2">Clara Bertoletti</p>
                    </div>
                    <p>10 Sep</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={routes.lodgingDescription()}>
              <div className="w-72 rounded-lg">
                <div className="relative z-0">
                  <img
                    className="w-full bg-cover rounded-lg"
                    src={image3}
                    alt=""
                  />
                </div>
                <div className="relative border flex flex-col m-auto rounded-lg w-64 p-6 bg-white top-[-30px] z-40">
                  <p className="text-xl mb-2">Eiusmod tempor incididunt</p>
                  <p className="mb-2 text-gray-500">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptate
                  </p>
                  <hr />
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <img src={avatar} alt="" />
                      <p className="ml-2">Clara Bertoletti</p>
                    </div>
                    <p>10 Sep</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={routes.lodgingDescription()}>
              <div className="w-72 rounded-lg">
                <div className="relative z-0">
                  <img
                    className="w-full bg-cover rounded-lg"
                    src={image4}
                    alt=""
                  />
                </div>
                <div className="relative border flex flex-col m-auto rounded-lg w-64 p-6 bg-white top-[-30px] z-40">
                  <p className="text-xl mb-2">Eiusmod tempor incididunt</p>
                  <p className="mb-2 text-gray-500">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptate
                  </p>
                  <hr />
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <img src={avatar} alt="" />
                      <p className="ml-2">Clara Bertoletti</p>
                    </div>
                    <p>10 Sep</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={routes.lodgingDescription()}>
              <div className="w-72 rounded-lg">
                <div className="relative z-0">
                  <img
                    className="w-full bg-cover rounded-lg"
                    src={image5}
                    alt=""
                  />
                </div>
                <div className="relative border flex flex-col m-auto rounded-lg w-64 p-6 bg-white top-[-30px] z-40">
                  <p className="text-xl mb-2">Eiusmod tempor incididunt</p>
                  <p className="mb-2 text-gray-500">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptate
                  </p>
                  <hr />
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <img src={avatar} alt="" />
                      <p className="ml-2">Clara Bertoletti</p>
                    </div>
                    <p>10 Sep</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-[30rem] h-full border rounded-lg p-4">
            <h2 className="text-xl mb-6">Ailleurs qui ont la côte</h2>
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              grabCursor
              direction="vertical"
              className="w-[30rem] h-[34rem]"
            >
              <SwiperSlide className="flex mb-6">
                <img
                  className="w-44 object-cover rounded-lg"
                  src="https://lanouvelletribune.info/wp-content/uploads/2020/11/infirmiere.jpg"
                  alt=""
                />
                <div className="ml-6">
                  <p className="font-bold mb-6 mt-6">
                    Secrétaire médicale en hôpital
                  </p>
                  <div className="flex text-gray-500 mb-4">
                    <p>Lille - </p> <p> A partir du 04 Août</p>
                  </div>
                  <Link to={routes.jobPage()}>
                    <p className="text-blue-600">En savoir plus</p>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex mb-6">
                <img
                  className="w-44 object-cover rounded-lg"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <div className="ml-6">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <p className="font-bold mb-6 mt-6">Hôte d'accueil</p>
                  <div className="flex text-gray-500 mb-4">
                    <p>Marseille - </p> <p>Dès que possible</p>
                  </div>
                  <Link to={routes.jobPage()}>
                    <p className="text-blue-600">En savoir plus</p>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex mb-6">
                <img
                  className="w-44 object-cover rounded-lg"
                  src="https://www.bondyblog.fr/app/uploads/2021/10/technicien_fibre_optique.jpeg"
                  alt=""
                />
                <div className="ml-6">
                  <p className="font-bold mb-6 mt-6">
                    Technicien Fibre Optique
                  </p>
                  <div className="flex text-gray-500 mb-4">
                    <p>Montpellier - </p> <p>24 Juillet</p>
                  </div>
                  <Link to={routes.jobPage()}>
                    <p className="text-blue-600">En savoir plus</p>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex mb-6">
                <img
                  className="w-44 object-cover rounded-lg"
                  src={image5}
                  alt=""
                />
                <div className="ml-6">
                  <p className="font-bold mb-6 mt-6">
                    Lorem ipsum dolor sit amet
                  </p>
                  <div className="flex text-gray-500 mb-4">
                    <p>Clara Bertoletti - </p> <p>04 Aug</p>
                  </div>
                  <p className="text-blue-600">En savoir plus</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex mb-6">
                <img
                  className="w-44 object-cover rounded-lg"
                  src={image6}
                  alt=""
                />
                <div className="ml-6">
                  <p className="font-bold mb-6 mt-6">
                    Lorem ipsum dolor sit amet
                  </p>
                  <div className="flex text-gray-500 mb-4">
                    <p>Clara Bertoletti - </p> <p>04 Aug</p>
                  </div>
                  <p className="text-blue-600">En savoir plus</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default LodgingPagePage
