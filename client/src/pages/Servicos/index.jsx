import { Div, Title } from "@/style/tags"
import { SearchIcon, ArrowLeft } from "@/style/icons"
import { Button } from "@/components/common/Button"
import { theme } from "@/style/config"
import { useNavigate } from "react-router-dom"

const Servicos = () => {
    const navigate = useNavigate();
    return <>
        <Div as={"section"} $flex>
            <Div $flex $row gap={'8px'}>
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
            </Div>
        </Div>
    </>
}

export default Servicos