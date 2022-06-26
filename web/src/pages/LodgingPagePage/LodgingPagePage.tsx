import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Link } from '@redwoodjs/router'
import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import 'swiper/css'
import 'swiper/css/navigation'

import image1 from '../../../../web/public/img/AdobeStock_243643016.jpeg'
import image4 from '../../../../web/public/img/AdobeStock_243643016.jpeg'
import image2 from '../../../../web/public/img/AdobeStock_257275647.jpeg'
import image6 from '../../../../web/public/img/AdobeStock_292854875.jpeg'
import image3 from '../../../../web/public/img/AdobeStock_366363160.jpeg'
import image5 from '../../../../web/public/img/AdobeStock_371383825.jpeg'
import avatar from '../../../../web/public/img/avatar1.png'

const LodgingPagePage = () => {
  return (
    <>
      <MetaTags title="LodgingPage" description="LodgingPage page" />
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

          <div className="w-[28rem] h-full border rounded-lg p-4">
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
                  src={image1}
                  alt=""
                />
                <div className="ml-6">
                  <p className="font-bold mb-6 mt-6">
                    Lorem ipsum dolor sit amet
                  </p>
                  <div className="flex text-gray-500 mb-4">
                    <p>Clara Bertoletti - </p> <p>04 Aug</p>
                  </div>
                  <p className="text-blue-600">Read more</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex mb-6">
                <img
                  className="w-44 object-cover rounded-lg"
                  src={image3}
                  alt=""
                />
                <div className="ml-6">
                  <p className="font-bold mb-6 mt-6">
                    Lorem ipsum dolor sit amet
                  </p>
                  <div className="flex text-gray-500 mb-4">
                    <p>Clara Bertoletti - </p> <p>04 Aug</p>
                  </div>
                  <p className="text-blue-600">Read more</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex mb-6">
                <img
                  className="w-44 object-cover rounded-lg"
                  src={image4}
                  alt=""
                />
                <div className="ml-6">
                  <p className="font-bold mb-6 mt-6">
                    Lorem ipsum dolor sit amet
                  </p>
                  <div className="flex text-gray-500 mb-4">
                    <p>Clara Bertoletti - </p> <p>04 Aug</p>
                  </div>
                  <p className="text-blue-600">Read more</p>
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
                  <p className="text-blue-600">Read more</p>
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
                  <p className="text-blue-600">Read more</p>
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
