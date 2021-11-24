import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React from 'react';
import styled from 'styled-components';
import { Container, Flex, Img } from '../globalStyles';
import logo from '../Img/logo.svg'
import Data from "../Store/Data";

const Head = styled.header`
    padding: 25px 0;
    @media (max-width: 910px) {
        padding: 8px 0;
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

const Session = styled.div`
    font-size: 20px;

`


const Header = observer(() => {

    const tokenId = toJS(Data.tokenId);
 

    return (
        <Head>
            <Container>
                <Flex justifyContent={"space-between"} alingItems={"center"}>
                    <Logo><LogoImg src={logo}/></Logo>
                    {tokenId === '' ? null : <Session>Id {tokenId.tokenId}</Session>}
                </Flex>
            </Container>
        </Head>
    )
})

export default Header
