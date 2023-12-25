import { styled } from "styled-components";
import { Link } from "react-router-dom"
import { theme } from "@/style/config"
import { Bold } from "@/components/common/Typing"
import { ProfileIcon } from "@/style/icons"
import api from "@/api"

const Div = styled(Link)`
    width: 100%;
    min-width: 250px;
    background-color: ${theme.root.blueShadowTwo};
    color: ${theme.root.blueTwo};
    border: solid 1px ${theme.root.blueShadow};
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    cursor: pointer;
`

const Container = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    margin: ${props => props.margin || "0"};
    align-items: center;
`

const Horizontal = styled.div`
    display: flex;
    align-items: center;
`

const Text = styled.p`
    font-size: 18px;
`

const Desc = styled.p`
    color: ${theme.root.white};
`
const CardUser = ({ data, onClick }) => {
    return (
        <Div as={"div"} to={data.id} onClick={onClick}>
            <Container margin={"0 0 4px 0"}>
                <Horizontal>
                    <ProfileIcon fontSize={"26px"} />
                    <Text><Bold>{data.name ?? ""}</Bold></Text>
                </Horizontal>
                <Text>{api.matchProfile(data.role)}</Text>
            </Container>
            <Text><Bold>Username:</Bold> {data.username ?? ""}</Text>
            <Container>
                <Text><Bold>Cel.:</Bold> {data.phone ?? ""}</Text>
            </Container>
            <Text><Bold>Email:</Bold> {data.email ?? ""}</Text>
        </Div>
    )
}

export default CardUser;