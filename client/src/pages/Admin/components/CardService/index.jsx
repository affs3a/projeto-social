import { StoreIcon } from "@/style/icons"
import * as Cp from "../common"

const CardService = ({ data, dataset, onClick }) => {
    return (
        <Cp.Div as={"div"} to={data.id} onClick={onClick}>
            <Cp.Container margin={"0 0 4px 0"}>
                <Cp.Horizontal>
                    <StoreIcon fontSize={"26px"} />
                    <Cp.Text><Cp.Bold>{data.name ?? ""}</Cp.Bold></Cp.Text>
                </Cp.Horizontal>
                <Cp.Text>{dataset.category.name}</Cp.Text>
            </Cp.Container>
            <Cp.Text><Cp.Bold>Identificador:</Cp.Bold> {data.identifier ?? ""}</Cp.Text>
            <Cp.Text><Cp.Bold>Dono:</Cp.Bold> {dataset.owner.name ?? ""}</Cp.Text>
            <Cp.Text><Cp.Bold>WhatsApp:</Cp.Bold> {data.whatsapp ?? ""}</Cp.Text>
        </Cp.Div>
    )
}

export default CardService;