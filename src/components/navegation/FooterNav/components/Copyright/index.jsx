import { Description, Div, LinkRouter, Span } from '/src/style/tags'

const Copyright = () => {
    return (
        <Div
            $flex={true}
            direction={'column'}
            gap={'10px'}
            top={'20px'}
        >
            <Description fontSize={'18px'}>
                Araripe, Ceára, Brasil
            </Description>
            <Span
                fontSize={'14px'}
            >
                2023 - EEEP Valter Nunes de Alencar. Todos os direitos reservados.
            </Span>
            <LinkRouter
                to={'/'}
                fontSize={'14px'}
            >
                Desenvolvedores
            </LinkRouter>
        </Div>
    )
}

export default Copyright

