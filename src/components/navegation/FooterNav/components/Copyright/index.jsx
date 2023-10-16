import { LinkRouter, Span } from '/src/style/tags'

const Copyright = () => {
    return (
        <>
            <Span>
                2023 - EEEP Valter Nunes de Alencar. Todos os direitos reservados.
            </Span>
            <LinkRouter
                to={'/'}
            >
                Desenvolvedores
            </LinkRouter>
        </>
    )
}

export default Copyright

