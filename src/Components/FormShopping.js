import axios from 'axios'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { Input } from '../globalStyles'
import Data from '../Store/Data'


const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 45px;
    @media (max-width: 910px) {
        flex-direction: column;
        width: 100%;
        margin-bottom: 20px;
    }
`

const Submit = styled(Input)`
    background: #C9D388;
    border-radius: 4px;
    margin-right: 5px;
    @media (max-width: 910px) {
        width: 100%;
        max-width:100%;
    }
`

const Select = styled.select`
    width: 235px;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    background: #FFFFFF;
    padding: 10px 15px 10px 15px;
    border: 1px solid #BDBDBD;
    border-radius: 4px;
    margin-right: 10px;
    @media (max-width: 910px) {
        width: 100%;
        max-width:100%;
        margin-bottom: 5px;
    }
`

const FormShopping = observer(() => {

    const {register, handleSubmit, error} = useForm();

    async function onSubmit (data) {

        const product = {
            id: 0,
            title: data.title,
            kind: data.kind,
            price: Number(data.price),
            done: false
        }

        await axios({
            method: 'post', //you can set what request you want to be
            url: 'https://bc.gotbit.io/api/v1/items',
            data: product,
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
                // Data.getListProduct(response.data)
                console.log(response.data);
                // console.log(Data.listProducts);

            })
            .catch(error => {
                console.log(error)}
            )
    }

    return (
        <Form action="" onSubmit={handleSubmit(onSubmit)}>
            <Select {...register('kind', { required: true })} name="kind">
                <option defaultValue value="">Тип покупки</option>
                <option value="еда">Eда</option>
                <option value="Вода">Вода</option>
                <option value="Быт">Быт</option>
            </Select>
            <Input {...register('title', { required: true, minLength: 2 })} type={"text"} placeholder={"Название"} name="title"/>
            <Input {...register('price', { required: true })} type="number" placeholder={"Цена"} name="price"/>
            <Submit marginRight={"20px"} type={"submit"} placeholder={"Отправить"}/>
        </Form>
    )
})

export default FormShopping
