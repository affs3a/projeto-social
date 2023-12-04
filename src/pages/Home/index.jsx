import CardHome from "@/components/cards/CardHome"
import { Menuicon } from "@/style/icons"


const Home = () => {
    return (
        <>
            <CardHome
                IconOne={Menuicon}
                text={"Serviços"}
                IconTwo={Menuicon}
            />
        </>
    )
}

export default Home