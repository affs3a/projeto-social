import { Swiper, SwiperSlide } from 'swiper/react';
import './slide.css'

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const inforSlide = [
    {
        title: "ArariServiços",
        description: "Encontre o serviço ideal para você em Araripe-CE"
    },
    {
        title: "Facil e intuitivo",
        description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"
    },
    {
        title: "Direto ao ponto.",
        description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"
    }

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
            {inforSlide.map((e, key) => {
                return (
                    <SwiperSlide className='swiper-slide' key={key}>
                        <div className='swiper-slide-div'>
                            <h2 style={{fontWeight: 900}} className='swiper-slide-title'>{e.title}</h2>
                            <p className='swiper-slide-description'>{e.description}</p>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Slide