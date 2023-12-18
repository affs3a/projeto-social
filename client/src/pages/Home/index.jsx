import CardHome from "@/components/cards/CardHome"
import { Arrowicon, ListIcon } from "@/style/icons"
import { Div } from "@/style/tags"
import Slide from "@/components/Slide"
import CardCategory from "@/components/cards/CardCategory"

const Home = () => {
    return (
        <>
            {/* <Slide /> */}
            <Div as={"section"} $flex gap={"10px"}>
                <CardHome
                    link={"servicos"}
                    IconOne={ListIcon}
                    text={"Serviços"}
                    IconTwo={Arrowicon}
                    color={"#fff"}
                />
                <CardHome
                    link={"sobre"}
                    IconOne={ListIcon}
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