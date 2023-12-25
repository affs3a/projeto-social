import { Div, Description } from "@/style/tags";
import { ErrorInfo, ArrowLeft } from "@/style/icons";
import { theme } from "@/style/config"
import { Button } from "@/components/common/Button"
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
    const navigate = useNavigate()
    return <>
        <Div $flex gap={'8px'}>
            <ErrorInfo fontSize={"72px"} color={theme.root.redOne} />
            <Description maxwidth={"300px"} fontSize={"22px"} align={"center"}>Você não tem permissão para acessar esta rota!</Description>
            <Button
                margin={"12px 0"}
                back={theme.root.blueOne}
                color={theme.root.white}
                hover={theme.root.shadow}
                height={"36px"}
                onClick={() => navigate('/')}
            ><ArrowLeft />Voltar ao início</Button>
        </Div>
    </>
}

export default Unauthorized;