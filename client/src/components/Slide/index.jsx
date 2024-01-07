import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import './slide.css'

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Image = styled.img`
    border-radius: ${props => props.radius};
`

const Slide = ({ imagesSlide, border }) => {
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
                        <Image
                            src={image}
                            className='swiper-image'
                            radius={border}
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Slide