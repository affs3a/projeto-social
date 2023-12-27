import CardHome from "@/components/cards/CardHome"
import { Arrowicon } from "@/style/icons"
import { Div } from "@/style/tags"
import { SearchCategoryIcon, InfoIcon } from "@/style/icons"
import Slide from '@/components/Slide'
import styled from "styled-components"

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
            {/* <CardCategory /> */}
        </>
    )
}

export default Home