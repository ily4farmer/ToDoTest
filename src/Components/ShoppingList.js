import axios from 'axios'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Data from '../Store/Data'
import ShoppingListItem from './ShoppingListItem'


const List = styled.ul`
    display: flex;
    max-width: 900px;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    background: #FDFFB4;
    border-radius: 8px;
    width: 100%;
    margin: auto;
    height: 300px;
    padding: 10px;
    @media (max-width: 910px) {
        height: 230px;
    }
`

const ShoppingList = observer(({token}) => {

        
    useEffect(() => {
        axios({
            method: 'get', //you can set what request you want to be
            url: 'https://bc.gotbit.io/api/v1/items',
            headers: {
                'TODO-TOKEN': Data.token
            }})
        .then(response => {
            Data.getListProduct(response.data)

        })
        .catch(error => {
            console.log(error)}
        )
        
        
    }, [token])

    async function deleteItem(id) {
        await axios({
            method: 'post', //you can set what request you want to be
            url: `https://bc.gotbit.io/api/v1/item/${id}/delete`,
            headers: {
                'TODO-TOKEN': Data.token
            }
          })
        .then(response => {console.log(response)})
        .catch(error => {
            console.log(error)}
        )

        await axios({
            method: 'get', //you can set what request you want to be
            url: 'https://bc.gotbit.io/api/v1/items',
            headers: {
                'TODO-TOKEN': Data.token
            }})
            .then(response => {
                Data.getListProduct(response.data)
            })
            .catch(error => {
            console.log(error)
            })
    }


    return (
        <List>
            {Data.listProducts.map((el) => <ShoppingListItem deleteItem={deleteItem} key={el.id} {...el}/>)}
        </List>
    )
})

export default ShoppingList
