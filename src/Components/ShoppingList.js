import axios from 'axios'
import { toJS } from 'mobx'
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

const ShoppingList = observer(() => {

    // Data.listProducts
    useEffect(()=> {
        axios({
            method: 'get', //you can set what request you want to be
            url: 'https://bc.gotbit.io/api/v1/items',
            headers: {
                'TODO-TOKEN':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo5MywiZXhwIjoxNjM3Njc1MzIyLCJpYXQiOjE2Mzc1ODg5MjJ9.vTS-mpKZ_rpFU0OB_5-5kxMAV_igHXA-bcsG2B7zPOQ"
            }
          })
        .then(response => {
            Data.getListProduct(response.data)
            console.log(response.data);
            // console.log(Data.listProducts);

        })
        .catch(error => {
            console.log(error)}
        )
            
    }, [])
    return (
        <List>
            {Data.listProducts.map((el) => <ShoppingListItem key={el.id} {...el}/>)}
        </List>
    )
})

export default ShoppingList
