import { ProfileIcon } from "@/style/icons"
import api from "@/api"
import * as Cp from "../common"

const CardUser = ({ data, onClick }) => {
    return (
        <Cp.Div as={"div"} to={data.id} onClick={onClick}>
            <Cp.Container margin={"0 0 4px 0"}>
                <Cp.Horizontal>
                    <ProfileIcon fontSize={"26px"} />
                    <Cp.Text><Cp.Bold>{data.name ?? ""}</Cp.Bold></Cp.Text>
                </Cp.Horizontal>
                <Cp.Text>{api.matchProfile(data.role)}</Cp.Text>
            </Cp.Container>
            <Cp.Text><Cp.Bold>Username:</Cp.Bold> {data.username ?? ""}</Cp.Text>
            <Cp.Container>
                <Cp.Text><Cp.Bold>Cel.:</Cp.Bold> {data.phone ?? ""}</Cp.Text>
            </Cp.Container>
            <Cp.Text><Cp.Bold>Email:</Cp.Bold> {data.email ?? ""}</Cp.Text>
        </Cp.Div>
    )
}

export default CardUser;