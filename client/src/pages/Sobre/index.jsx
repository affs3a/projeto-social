import styled from "styled-components"
import { Div, Title } from "@/style/tags"
import { SearchIcon, ArrowLeft } from "@/style/icons"
import { Button } from "@/components/common/Button"
import { theme } from "@/style/config"
import { useNavigate } from "react-router-dom"
import Valter from "@public/images/valter.png"
import Infor from "@public/images/infor.png"

const Description = styled.p`
    font-size: 1.1rem;
    text-align: justify;
    max-width: 320px;
`

const Bold = styled.b`
    font-weight: 900;
    color: ${theme.root.blueTwo};
`

const Image = styled.img`
    object-fit: cover;
    filter: ${props => props.$dark ? "brightness(0)" : "brightness(100%)"};
`

const Sobre = () => {
    const navigate = useNavigate();

    return <>
        <Div as={"section"} $flex>
            <Div $flex $row gap={'8px'} bottom={'18px'}>
                <SearchIcon />
                <Title>Sobre</Title>
                <Button
                    margin={'0 0 0 16px'}
                    back={theme.root.blueShadow}
                    hover={theme.root.shadow}
                    height={"34px"}
                    onClick={() => navigate('/')}
                ><ArrowLeft />Voltar</Button>
            </Div>
            <Div top={"2rem"} $flex gap={'16px'}>
                <Div $flex $row gap={"18px"}>
                    <Image height={"60px"} $dark src={Valter} />
                    <Image height={"50px"} src={Infor} />
                </Div>
                <Description>
                    Esta plataforma Web é uma <Bold>Projeto Social</Bold> dos alunos do <Bold>Curso Técnico de
                        Informática</Bold> da <Bold>Escola Estadual de Educação Profissional Valter Nunes de Alencar</Bold>.
                </Description>
                <Description>
                    O objetivo é divulgar os prestadores de serviços disponíveis
                    no município de Araripe de forma prática e rápida.
                </Description>
            </Div>
        </Div>
    </>
}

export default Sobre