import { styled } from "styled-components"
import { ListIcon, ErrorIcon } from "/src/style//icons"
import { Div } from "/src/style/tags"
import ActionsMenu from "../ActionsMenu"

const Link = styled.a`
    display: flex;
    align-items: center;
    width: 100%;
    padding: .3rem;
    gap: .3rem;
`

const TitleLink = styled.h3`
    font-size: 20px;
`

const DivHeader = styled(Div)`
    display: flex;
    flex-direction: column;
    align-items: start;
    position: absolute;
    height: calc(100vh - 72px);
    width: 70%;
    max-width: 200px;
    background: #D9D9D9;
    right: 0;
    top: 72px;
    padding: .5rem 1em;
    gap: .5rem;
    display: none;

`


const MenuNav = () => {
    return (
        <DivHeader flex={"true"}>
            <Link>
                <ListIcon fontSize={'27px'} />
                <TitleLink>Serviços</TitleLink>
            </Link>
            <Link>
                <ErrorIcon fontSize={'27px'} />
                <TitleLink>Sobre</TitleLink>
            </Link>
            <ActionsMenu />
        </DivHeader>
    )
}

export default MenuNav