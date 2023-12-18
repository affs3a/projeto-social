import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'
import logo from "/public/logo.png"

const Slide = () => {
    return (
        <Swiper className='swiper'>
            <SwiperSlide className='swiper-slide'>
                <img
                    className='slide-image'
                    src={logo}
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default Slide