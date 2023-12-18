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
                        back={'#4661a9'}
                        hover={'#3a4f87'}
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