import "swiper/css";
import React, { use } from "react";
import  { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const issuePromise = fetch("https://environmental-issues-server.vercel.app/issues").then(res=>res.json())

const Banner = () => {
    const data = use(issuePromise)
  return (
    <div className=" mx-auto mb-20">
      <Swiper
        navigation={true}
        pagination={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation,Pagination]}>
        {data.map((d) => (
          <SwiperSlide className=" p-16">
            <div className="rounded-xl card bg-base-100  shadow-sm border border-gray-100 p-5 flex flex-1 h-full">
              <img
                className="h-[250px] w-[100%] rounded-lg pb-2"
                src={d.image}
                alt=""
              />
              <p className=" text-xl font-bold my-2">{d.title}</p>
              <p className=" ">{d.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
