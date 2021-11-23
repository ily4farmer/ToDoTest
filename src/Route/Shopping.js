import React from 'react'
import FormShopping from '../Components/FormShopping'
import ShoppingList from '../Components/ShoppingList'
import { Container, Flex, Section } from '../globalStyles'

const Shopping = () => {
    return (
        <Section>
            <Container>
                <Flex alingItems="center" flexDirection="column">
                    <FormShopping/>
                    <ShoppingList/>
                </Flex>
            </Container>
        </Section>
    )
}

export default Shopping
