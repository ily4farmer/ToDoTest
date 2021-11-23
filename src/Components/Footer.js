import React from 'react';
import styled from 'styled-components';
import { Container, Flex } from '../globalStyles';

const Foot = styled.footer`
    background: #E8C13A;
`

const Span = styled.span`
    text-align: center;
    font-size: 14px;
    font-weight: 500;
`

const Footer = () => {
    return (
        <Foot>
            <Container>
                <Flex justifyContent={"center"}>
                    <Span>Работа выполнена @Ily4farmer</Span>
                </Flex>
            </Container>
        </Foot>
    )
}

export default Footer
