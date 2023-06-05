import { useEffect, useState } from "react"
import image1 from "./assets/img/Nasi_Tempong.png"
import image2 from "./assets/img/Nasi_Cawuk.png"
import image3 from "./assets/img/Rujak_Soto.png"
import image4 from "./assets/img/Tahu_Walik.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons"
import { RujakSoto, SegoCawuk, SegoTempong, TahuWalik } from "./components/content"

function App() {
  const [rotation, setRotation] = useState(0);
  const [indexSlide, setIndexSlide] = useState(0);

  useEffect(() => {
    if (indexSlide === 0) {
      setRotation(0)
    } else if (indexSlide === 1) {
      setRotation(90)
    } else if (indexSlide === 2) {
      setRotation(180)
    } else if (indexSlide === 3) {
      setRotation(270)
    }
  },[indexSlide])

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col justify-center items-center overflow-auto">
      <div 
        className="w-[64rem] h-[64rem] gradient-color rounded-full transition-all ease-in-out duration-300 fixed top-[-32rem] left-[-32rem] flex justify-end items-end"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      ></div>
      <div 
        className="w-[54rem] h-[54rem] bg-gray-100 rounded-full transition-all ease-in-out duration-300 fixed top-[-27rem] left-[-27rem] flex justify-end items-end"
      ></div>
      <div className="flex flex-col fixed top-3 left-10">
        <span className="text-2xl font-bold text-[#22c1c3]">BANYUWANGI</span>
        <span className="text-sm mt-[-5px] font-bold">CULINARY TOURISM</span>
      </div>
      <div 
        className="w-[54rem] h-[54rem] transition-all ease-in-out duration-500 fixed top-[-32rem] left-[-32rem] flex justify-end items-end"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div className="w-fit h-fit absolute bottom-[-10rem] right-[-10rem]">
          <img src={image1} className='w-[28rem] h-[28rem] drop-shadow-2xl'></img>
        </div>
        <div className="w-fit h-fit absolute top-[-10rem] right-[-10rem]">
          <img src={image2} className='w-[28rem] h-[28rem] drop-shadow-2xl'></img>
        </div>
        <div className="w-fit h-fit absolute top-[-10rem] left-[-10rem]">
          <img src={image3} className='w-[28rem] h-[28rem] drop-shadow-2xl'></img>
        </div>
        <div className="w-fit h-fit absolute bottom-[-10rem] left-[-10rem]">
          <img src={image4} className='w-[28rem] h-[28rem] drop-shadow-2xl'></img>
        </div>
      </div>
      <div className="h-24 w-full flex justify-end items-center px-10 gap-x-5">
        <input type="text" className="w-44 h-8 border border-[#22c1c3] 
        rounded-full bg-gray-200 hover:bg-gray-100 
        focus:bg-gray-100 focus:outline-none px-4 text-sm transition-all ease-in-out duration-300" placeholder="Pencarian"/>
        <FontAwesomeIcon icon={faBell} className='ml-4 h-6 text-[#22c1c3]'/>
        <FontAwesomeIcon icon={faBars} className='h-6 text-[#22c1c3]'/>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full h-full justify-center items-center"></div>
        {
          indexSlide === 0?
          <SegoTempong />
          :indexSlide === 1?
          <SegoCawuk />
          :indexSlide === 2?
          <RujakSoto />
          :indexSlide === 3&&
          <TahuWalik />
        }
      </div>
      <div className="w-full h-72  flex justify-center items-center">
        <div className="w-1/3 h-full"></div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
            scale:1
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper mb-4 w-full"
          onSlideChange={(e) => setIndexSlide(e.realIndex)}
        >
          <SwiperSlide className='rounded-xl'>
            <img src={image1} className='w-full h-full bg-transparent'></img>
          </SwiperSlide>
          <SwiperSlide className='rounded-xl'>
            <img src={image2} className='w-full h-full'></img>
          </SwiperSlide>
          <SwiperSlide className='rounded-xl'>
            <img src={image3} className='w-full h-full'></img>
          </SwiperSlide>
          <SwiperSlide className='rounded-xl'>
            <img src={image4} className='w-full h-full'></img>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <button className="fixed top-0 right-0" onClick={rotateObject}>Rotate</button> */}
    </div>
  )
}

export default App
