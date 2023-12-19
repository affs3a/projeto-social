import { Div, Title } from "@/style/tags"
import { Form, Field } from "@/components/common/Form"
import { theme } from "@/style/config"
import { Button } from "@/components/common/Button"
import { SearchIcon } from "../../style/icons"

const Categorias = () => {
    return <>
        <Div as={"section"} $flex>
            <Div $flex $row gap={'8px'}>
                <SearchIcon />
                <Title>Categorias</Title>
            </Div>
        </Div>
    </>
}

export default Categorias