import { Div, Title } from "@/style/tags"
import { SearchIcon, ArrowLeft } from "@/style/icons"
import { Form, Input } from "@/components/common/Form"
import { Button } from "@/components/common/Button"
import { theme } from "@/style/config"
import { useNavigate } from "react-router-dom"
import Empty from "@/components/responses/Empty"
import { useState } from "react"
import utils from "@/utils"

const Servicos = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState()

    //IMPL

    const searchHandler = (e) => {
        e.preventDefault()
        setFilter(utils.formToObject(e.target)['search'])
    }

    return <>
        <Div as={"section"} $flex>
            <Div $flex $row gap={'8px'} bottom={'12px'}>
                <SearchIcon />
                <Title>Serviços</Title>
                <Button
                    margin={'0 0 0 16px'}
                    back={theme.root.blueShadow}
                    hover={theme.root.shadow}
                    height={"34px"}
                    onClick={() => navigate('/localizar')}
                ><ArrowLeft />Voltar</Button>
            </Div>
            <Form onSubmit={searchHandler} $flex maxwidth={"330px"}>
                <Div $row $flex justify={"right"} gap={"4px"}>
                    <Input
                        padding={"6px"}
                        type={"search"}
                        name={"search"}
                        id={"search"}
                        placeholder={"Localizar"}
                    />
                    <Button
                        type={"submit"}
                        back={theme.root.white}
                        border={theme.root.shadow}
                        hover={theme.root.blueShadowTwo}
                        height={"38px"}
                    ><SearchIcon /></Button>
                </Div>
            </Form>
            <Div $flex top={"2rem"} gap={"1rem"}>
                {/* IMPL */}
            </Div>
        </Div>
    </>
}

export default Servicos