import CardHome from "@/components/cards/CardHome"
import { Arrowicon } from "@/style/icons"
import { Div } from "@/style/tags"
import { SearchCategoryIcon, InfoIcon } from "@/style/icons"

const Home = () => {
    return (
        <>
            {/* <Slide /> */}
            <Div as={"section"} $flex gap={"10px"}>
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