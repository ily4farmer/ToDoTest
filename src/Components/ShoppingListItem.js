import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { Flex, Img } from '../globalStyles'
import add from "../Img/add.svg"
import del from '../Img/delete.svg'

const ListItem = styled.li`
    display: flex;
    max-width: 732px;
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
`

const Btn = styled(Flex)`
    width: 45px;
    height: 45px;
    background: ${({background}) => background || '#fff'};
    border: 1px solid #BDBDBD;
    border-radius: 8px;
`

const Text = styled.p`
    max-width: 600px;
    width: 100%;
    font-weight: 500;
    font-size: 18px;
    background: #fff;
    border: 1px solid #BDBDBD;
    border-radius: 8px;
    padding: 0 10px;
    margin-right: 10px;
    margin-left: 10px;
`

const ShoppingListItem = ({id, title, kind, price, done}) => {

    async function deleteItem() {
        await axios({
            method: 'post', //you can set what request you want to be
            url: `https://bc.gotbit.io/api/v1/item/${id}/delete`,
            headers: {
                'TODO-TOKEN':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo5MywiZXhwIjoxNjM3Njc1MzIyLCJpYXQiOjE2Mzc1ODg5MjJ9.vTS-mpKZ_rpFU0OB_5-5kxMAV_igHXA-bcsG2B7zPOQ"
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
                'TODO-TOKEN':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo5MywiZXhwIjoxNjM3Njc1MzIyLCJpYXQiOjE2Mzc1ODg5MjJ9.vTS-mpKZ_rpFU0OB_5-5kxMAV_igHXA-bcsG2B7zPOQ"
            }
          })
        .then(response => {
            console.log(response.data);

        })
        .catch(error => {
            console.log(error)}
        )
    }

    return (
        <ListItem>
            <Btn background={ done ? "#81FDB2" : "fff"} justifyContent="center" alingItems="center">
                <Img src={add}/>
            </Btn>
            <Text>{kind} / {title} / {price} руб.</Text>
            <Btn background="#FAA475" justifyContent="center" alingItems="center" onClick={deleteItem}>
                <Img src={del}/>
            </Btn>
        </ListItem>
    )
}

export default ShoppingListItem
