import { Description, Div, LinkRouter, Span } from '@/style/tags'
import { Arrowicon } from '@/style/icons'

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
                &copy;2023 - EEEP Valter Nunes de Alencar. Todos os direitos reservados.
            </Span>
            <LinkRouter
                to={'/'}
                fontSize={'14px'}
                color={'#fff'}
                $flex={true}
            >
                Desenvolvedores
                <Arrowicon />
            </LinkRouter>
        </Div>
    )
}

export default Copyright

