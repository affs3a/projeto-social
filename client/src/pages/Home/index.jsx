import styled from "styled-components"
import { Arrowicon } from "@/style/icons"
import { SearchCategoryIcon, InfoIcon } from "@/style/icons"
import { Div } from "@/style/tags"
import Slide from '@/components/Slide'
import CardHome from "@/components/cards/CardHome"
import InforHome from "@/components/common/InforHome"

// Imagens
import inforhome1 from "@public/images/inforhome1.jpg"
import inforhome2 from "@public/images/inforhome2.jpg"
import inforhome3 from "@public/images/inforhome3.jpg"

export const SwiperSlide = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    margin-top: -1rem;
    z-index: 1;
    box-sizing: border-box;
`

const DivInfor = styled.div`
    width: 100vw;
    padding: 2rem 0.8rem 3rem;
    background-color: ${({ theme }) => theme.root.blueFive};
    color: ${({ theme }) => theme.root.white};
`

//Imagens slide
import slide1 from "@public/images/slide1.jpg"
import slide2 from "@public/images/slide2.jpg"
import slide3 from "@public/images/slide3.jpg"
import slide4 from "@public/images/slide4.jpg"
import slide5 from "@public/images/slide5.jpg"

const imagesSlide = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
]

const Home = () => {
    return (
        <>
            <SwiperSlide width={"100vw"} height={"300px"}>
                <Slide
                    imagesSlide={imagesSlide}
                />
            </SwiperSlide>
            <Div as={"section"} $flex gap={"1rem"} padding={"2rem 0"}>
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
            <Div $flex gap={"2rem"}>
                <InforHome
                    title={"Plataforma Web"}
                    description={"O portal ArariServiços foi desenvolvido como uma plataforma web dedicada a proporcionar uma visão abrangente e acessível aos diversos serviços disponíveis no município de Araripe."}
                    image={inforhome1}
                />
                <DivInfor>
                    <InforHome
                        title={"Facilitando e ajudando"}
                        description={"Este aplicativo online destaca e promove ativamente as variadas opções de serviços oferecidos pela comunidade local, facilitando o acesso e a divulgação para os residentes e visitantes."}
                        image={inforhome2}
                    />
                </DivInfor>
                <InforHome
                    title={"Explore e descubra"}
                    description={"Explore e descubra a diversidade de serviços que Araripe tem a oferecer através desta plataforma interativa, unindo a comunidade em torno de informações valiosas e oportunidades locais."}
                    image={inforhome3}
                />
            </Div>
        </>
    )
}

export default Home