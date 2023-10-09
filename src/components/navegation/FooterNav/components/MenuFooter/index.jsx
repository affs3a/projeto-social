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
            $flex={true}
            gap={'1rem'}
        >
            {MenuList.map(itens => {
                return (
                    <LinkRouter $back={'#FFA553'} to={itens.http}>
                        {itens.nome}
                    </LinkRouter>
                )
            })}
        </Div>
    )
}

export default MenuFooter