import { Div, LinkRouter } from "/src/style/tags"


const MenuFooter = () => {
    const MenuList = [
        {
            nome: "Inicio",
            http: '/'
        },
        {
            nome: "Localizar",
            http: 'localizar'
        },
        {
            nome: "Sobre",
            http: 'sobre'
        }
    ]

    return (
        <Div
            as="nav"
            $flex
            $row
            gap={"1rem"}
        >
            {MenuList.map(itens => {
                return (
                    <LinkRouter
                        back={'#444'}
                        hover={'#333'}
                        color={'#fff'}
                        padding={".5rem 1rem"}
                        to={itens.http}
                        key={itens.nome}
                        fontSize={"14px"}
                    >
                        {itens.nome}
                    </LinkRouter>
                )
            })}
        </Div>
    )
}

export default MenuFooter