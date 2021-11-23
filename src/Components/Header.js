import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Flex, Img } from '../globalStyles';
import logo from '../Img/logo.svg'

const Head = styled.header`
    padding: 28px 0;
    @media (max-width: 910px) {
        padding: 15px 0;
    }
`

const Logo = styled.div`
    font-weight: bold;
    font-size: 28px;
    line-height: 44px;
    color: #030303;
    display: flex;
    align-items: center;
`

const LogoImg = styled(Img)`
    width: 100%;
    height: 30px;
`


const Header = () => {
    return (
        // <div></div>
        <Head>
            <Container>
                <Flex justifyContent={"space-between"}>
                    <Link to="/"><Logo><LogoImg src={logo}/></Logo></Link>
                </Flex>
            </Container>
        </Head>
    )
}

export default Header
