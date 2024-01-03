import { Div, Description } from "@/style/tags";
import { InfoIcon } from "@/style/icons";
import { theme } from "@/style/config"

const Empty = () => {
    return <>
        <Div $flex $row gap={'8px'}>
            <InfoIcon fontSize={"32px"} color={theme.root.blueTwo} />
            <Description maxwidth={"300px"} fontSize={"20px"} align={"center"}>Nenhum item para mostrar!</Description>
        </Div>
    </>
}

export default Empty;