import { Swiper, SwiperSlide } from 'swiper/react';
import './slide.css'
import logo from "@public/images/teste.jpg"

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const imagesSlide = [
    logo,
    logo, 
    logo,
    logo
]

const Slide = () => {
    return (
        <Swiper
            className='swiper'
            slidesPerView={1}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000
            }}
        >
            {imagesSlide.map((e) => {
                return (
                    <SwiperSlide className='swiper-slide'>
                        <img
                            className='slide-image'
                            src={e}
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Slide