import { Div, Title } from "@/style/tags"
import { SearchIcon } from "../../style/icons"

const Servicos = () => {
    return <>
        <Div as={"section"} $flex>
            <Div $flex $row gap={'8px'}>
                <SearchIcon />
                <Title>Serviços</Title>
            </Div>
        </Div>
    </>
}

export default Servicos