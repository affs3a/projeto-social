import { styled } from "styled-components"
import ActionsMenu from "./components/ActionsMenu"
import { Div } from "/src/style/tags"

const DivDesktop = styled(Div)`
    display: none;

    @media (min-width: 500px) {
        display: block;
    }
`

const MenuDesktop = () => {
    return (
        <DivDesktop>
            <ActionsMenu />
        </DivDesktop>
    )
}

export default MenuDesktop