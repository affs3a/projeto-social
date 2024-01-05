import { Swiper, SwiperSlide } from 'swiper/react';
import './slide.css'

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';



//Imagens
import image from "@public/images/slide.jpg"

const imagesSlide = [
    image,
    image,
    image
]


const Slide = () => {
    return (
        <Swiper
            className='swiper'
            slidesPerView={1}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000
            }}
        >
            {imagesSlide.map((image, key) => {
                return (
                    <SwiperSlide className='swiper-slide' key={key}>
                        <img src={image} className='swiper-image' />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Slide