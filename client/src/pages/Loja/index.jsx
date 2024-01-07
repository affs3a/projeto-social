import styled from "styled-components"
import { Div, Title, Description } from "@/style/tags"
import Slide from "@/components/Slide"
import { SwiperSlide } from "@/pages/Home"
import { Link } from "react-router-dom"


//Imagens slide
import image from "@public/images/slide.jpg"

const imagesSlide = [
    image,
    image,
    image
]


const Button = styled(Link)`

`

const Loja = ({ }) => {
    return (
        <Div $flex gap={"2rem"}>
            <Title fontSize={'1.7rem'}>Nome da Loja</Title>
            <SwiperSlide width={"100%"} height={"250px"}>
                <Slide
                    imagesSlide={imagesSlide}
                    border={"10px"}
                />
            </SwiperSlide>
            <Div $flex gap={'.5rem'}>
                <Title as={"h2"} fontSize={'1.3rem'}>Descrição</Title>
                <Description>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Description>
            </Div>
            <Div $flex gap={'.5rem'}>
                <Title as={"h2"} fontSize={'1.3rem'}>Contatos</Title>
                <Div $flex $row gap={"2rem"}>
                    <Button>
                        <Title as={"p"}>WhatsApp</Title>
                    </Button>
                    <Button>
                        <Title as={"p"}>Instagram</Title>
                    </Button>
                </Div>
            </Div>
        </Div>
    )
}

export default Loja