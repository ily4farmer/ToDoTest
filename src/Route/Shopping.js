import React from 'react'
import FormShopping from '../Components/FormShopping'
import ShoppingList from '../Components/ShoppingList'
import { Container, Flex, Section } from '../globalStyles'
import Data from '../Store/Data'

const Shopping = ({token}) => {

    console.log(token);

    return (
        <Section>
            <Container>
                <Flex alingItems="center" flexDirection="column">
                    <FormShopping/>
                    <ShoppingList token={token} list={Data.listProducts}/>
                </Flex>
            </Container>
        </Section>
    )
}

export default Shopping
