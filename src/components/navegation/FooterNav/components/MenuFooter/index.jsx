import { Div, LinkRouter } from "/src/style/tags"


const MenuFooter = () => {
    const MenuList = [
        {
            nome: "Inicio",
            http: '/'
        },
        {
            nome: "Serviços",
            http: 'servicos'
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
                        back={'#FFA553'}
                        padding={".3rem .5rem"}
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