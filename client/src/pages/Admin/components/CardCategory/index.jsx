import { ListIcon } from "@/style/icons"
import * as Cp from "../common"

const CardCategory = ({ data, onClick }) => {
    return (
        <Cp.Div as={"div"} to={data.id} onClick={onClick}>
            <Cp.Container margin={"0 0 4px 0"}>
                <Cp.Horizontal>
                    <ListIcon fontSize={"26px"} />
                    <Cp.Text><Cp.Bold>{data.name ?? ""}</Cp.Bold></Cp.Text>
                </Cp.Horizontal>
            </Cp.Container>
            <Cp.Text><Cp.Bold>Tags:</Cp.Bold> {data.tags ?? ""}</Cp.Text>
        </Cp.Div>
    )
}

export default CardCategory;