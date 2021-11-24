import axios from 'axios'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { Input } from '../globalStyles'
import Data from '../Store/Data'


const Form = styled.form`
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 45px;
    @media (max-width: 910px) {
        flex-direction: column;
        width: 100%;
        margin-bottom: 0px;
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

const Error = styled.label`
    font-size: 14px;
    text-align: center;
    width: 100%;
`

const FormShopping = observer(() => {

    const {register, handleSubmit } = useForm();
    
    const [inputText, setInputText] = useState('');
    const [err, setErr] = useState('')

    function handleInput(e) {   
        const validated = e.target.value.match(/^(\d*\.{0,1}\d{0,2}$)/)
        if (validated) {
            setInputText(e.target.value)
        }
    }


    async function onSubmit (data) {
        // Проверка на заполненость полей
        if(data.kind !== '' && data.price !== '' && data.title !== '') {
            setErr('');
            // вставляем все данные из полей
            const product = {
                id: 0,
                title: data.title,
                kind: data.kind,
                price: Number(data.price),
                done: false
            }
            // Отправка данных на сервер
            await axios({
                method: 'post', //you can set what request you want to be
                url: 'https://bc.gotbit.io/api/v1/items',
                data: product,
                headers: {
                    'TODO-TOKEN': Data.token
                }
            })
            .then(response => {console.log(response)})
            .catch(error => {
                console.log(error)}
            )

                // Получение данных с сервера
            await axios({
                    method: 'get', //you can set what request you want to be
                    url: 'https://bc.gotbit.io/api/v1/items',
                    headers: {
                        'TODO-TOKEN': Data.token
                    }
                })
                .then(response => {
                    Data.getListProduct(response.data)

                })
                .catch(error => {
                    console.log(error)}
                )
        } else {
            setErr("Заполните все поля")
        }
    }

    return (
        <Form action="" onSubmit={handleSubmit(onSubmit)}>
            <Select {...register('kind')} name="kind">
                <option value="">Тип покупки</option>
                <option value="еда">Eда</option>
                <option value="Вода">Вода</option>
                <option value="Быт">Быт</option>
            </Select>
            <Input {...register('title', { minLength: 1 })} type={"text"} placeholder={"Название"} name="title"/>
            <Input onInput={handleInput} value={inputText} {...register('price')}  type="number" placeholder={"Цена"} name="price" step="0.01" />
            <Submit marginRight={"20px"} type={"submit"} placeholder={"Отправить"}/>
            <Error>{err}</Error>
        </Form>
    )
})

export default FormShopping
