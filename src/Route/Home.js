import axios from 'axios'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Container, Flex, Section } from '../globalStyles'
import Data from '../Store/Data'

const ConnectButton = styled(Button)`
    background: #F5F884;
    box-shadow: 0px 4px 50px rgba(245, 248, 132, 0.72);
    border-radius: 42px;
    transform: rotate(0.17deg);
    padding: 40px 60px;
`

const SectionMain = styled(Section)`
    padding-top: 100px;
`

const Home = observer(() => {

    const navigate = useNavigate();

    async function getApi() {
        await axios.post('https://bc.gotbit.io/api/v1/new-session')
        .then(response => {
            console.log(response.data.token)
            Data.getToken(response.data.token)
            navigate('/Shopping')
        })
        .catch(error => {
            console.log(error)}
        )

    }


    return (
        <SectionMain>
            <Container>
                <Flex justifyContent="center">
                    <div onClick={getApi}> 
                        <ConnectButton>Подключиться</ConnectButton>
                    </div>
                </Flex>
            </Container>
        </SectionMain>
    );
});

export default Home
