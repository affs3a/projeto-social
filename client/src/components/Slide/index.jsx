import { Swiper, SwiperSlide } from 'swiper/react';
import './slide.css'

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


// const inforSlide = [
//     {
//         title: "Serviços Araripe",
//         description: "Encontre o serviço ideal para você em Araripe-CE"
//     },
//     {
//         title: "Facil e intuitivo",
//         description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI",
//     },
//     {
//         title: "Direto ao ponto.",
//         description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"
//     }

// ]


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