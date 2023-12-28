import styled from "styled-components"
import { Arrowicon } from "@/style/icons"
import { SearchCategoryIcon, InfoIcon } from "@/style/icons"
import { Div } from "@/style/tags"
import Slide from '@/components/Slide'
import InforHome from "@/components/common/InforHome"
import CardHome from "@/components/cards/CardHome"

// Imagens
import Image1 from "@public/images/teste.jpg"

const SwiperSlide = styled.div`
    width: 100vw;
    margin-top: -1rem;
    z-index: 1;
`

const Home = () => {
    return (
        <>
            <SwiperSlide>
                <Slide />
            </SwiperSlide>
            <Div as={"section"} $flex gap={"10px"} padding={"2rem 0"}>
                <CardHome
                    link={"localizar"}
                    IconOne={SearchCategoryIcon}
                    text={"Localizar"}
                    IconTwo={Arrowicon}
                    color={"#fff"}
                />
                <CardHome
                    link={"sobre"}
                    IconOne={InfoIcon}
                    text={"Sobre"}
                    IconTwo={Arrowicon}
                    color={"#fff"}
                />
            </Div>
            <Div $flex gap={'1.5rem'}>
                <InforHome
                    title={"Serviços Araripe"}
                    description={"Encontre o serviço ideal para você em Araripe-CE"}
                    image={Image1}
                />
                <InforHome
                    title={"Facil e intuitivo"}
                    description={"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"}
                    image={Image1}
                />
                <InforHome
                    title={"Direto ao ponto."}
                    description={"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"}
                    image={Image1}
                />
            </Div>
        </>
    )
}

export default Home