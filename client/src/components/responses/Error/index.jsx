import { Div, Description } from "@/style/tags";
import { InfoIcon } from "@/style/icons";
import { theme } from "@/style/config"

const Error = () => {
    return <>
        <Div $flex $row gap={'8px'}>
            <InfoIcon fontSize={"32px"} color={theme.root.redOne} />
            <Description maxwidth={"300px"} fontSize={"20px"} align={"center"}>Erro ao carregar a página!</Description>
        </Div>
    </>
}

export default Error;