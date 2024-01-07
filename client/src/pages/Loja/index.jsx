import styled from "styled-components"
import { Div, Title, Description } from "@/style/tags"
import Slide from "@/components/Slide"
import { SwiperSlide } from "@/pages/Home"
import { ArrowLeft } from "@/style/icons"
import { Link, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { WhatsIcon, InstaIcon } from "@/style/icons"
import Load from "@/components/common/Load"
import Error from "@/components/responses/Error"
import api from "@/api"
import utils from "@/utils"
import { theme } from "@/style/config"

const Button = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    background: ${props => props.back || theme.root.blueOne};
    color: white;
    padding: 8px 12px;
    border-radius: 8px;
    justify-content: center;
    transition: 200ms;
    &:hover {
        filter: brightness(80%);
    }
`

const Text = styled.p`
    white-space: pre-line;
    max-width: 360px;
    text-align: justify;
    font-size: 1.1rem;
`

const Back = styled(Link)`
    color: #000;
    margin-right: auto;
    margin-bottom: 8px;
`


const Loja = () => {
    const { id } = useParams()

    const service = useQuery({
        queryKey: [api.QUERY_SERVICES, 'one'],
        queryFn: async () => await api.getService(id),
    })

    const { data } = service

    return <>
        {service.isLoading && <Load />}
        {service.isSuccess ? (
            <Div $flex gap={"2rem"}>
                <Div $flex>
                    <Back to={`/localizar/${data.category}`}>
                        <ArrowLeft fontSize={"2.15rem"} />
                    </Back>
                    <Title fontSize={'1.7rem'}>{data.name}</Title>
                    <Description fontSize={'1.1rem'}>@{data.identifier}</Description>
                </Div>
                {data.images ? (
                    <SwiperSlide width={"100%"} height={"250px"}>
                        <Slide
                            imagesSlide={utils.parseImages(data.images)}
                            border={"10px"}
                        />
                    </SwiperSlide>

                ) : <Description>Sem imagens para mostrar!</Description>}
                <Div $flex gap={'.5rem'}>
                    <Title as={"h2"} fontSize={'1.3rem'}>Descrição</Title>
                    <Text>{data.description}</Text>
                </Div>
                <Div $flex gap={'.5rem'}>
                    <Title as={"h2"} fontSize={'1.3rem'}>Contatos</Title>
                    <Div $flex $row gap={"2rem"} top={"0.50rem"}>
                        {data.whatsapp && (
                            <Button back={theme.root.gradientGreen} target="_blank" href={api.whats_client + data.whatsapp}>
                                <WhatsIcon />
                                <Title as={"p"}>WhatsApp</Title>
                            </Button>
                        )}
                        {data.instagram && (
                            <Button back={theme.root.gradientPurple} target="_blank" href={api.insta_client + data.instagram.replace('@', '')}>
                                <InstaIcon />
                                <Title as={"p"}>Instagram</Title>
                            </Button>
                        )}
                    </Div>
                </Div>
            </Div>
        ) : <Error />}
    </>
}

export default Loja