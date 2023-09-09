import { styled } from "styled-components"
import { ListIcon, ErrorIcon } from "/src/style//icons"
import { Div } from "/src/style/tags"
import ActionsMenu from "../ActionsMenu"

const Link = styled.a`
    display: flex;
    align-items: center;
`

const TitleLink = styled.h3`

`

const MenuNav = () => {
    return (
        <Div>
            <Div flex={"true"}>
                <Link>
                    <ListIcon fontSize={'27px'} />
                    <TitleLink>Serviços</TitleLink>
                </Link>
                <Link>
                    <ErrorIcon fontSize={'27px'} />
                    <TitleLink>Sobre</TitleLink>
                </Link>
                <ActionsMenu/>
            </Div>
        </Div>
    )
}

export default MenuNav