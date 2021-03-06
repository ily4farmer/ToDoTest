import jwt_decode from "jwt-decode";
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Main } from "./globalStyles";
import Home from "./Route/Home";
import Shopping from "./Route/Shopping";
import Data from './Store/Data';

const App = observer(() => {

  const navigate = useNavigate();

  useEffect(() => {
    // Получаем токен из локального хранилища
    const token = localStorage.getItem('token');
    // если токен есть в локалке, тогда перекидывай на страницу Shopping
    if (token != null) {
      // Отправляем в MobX распарсенный токен из локального хранилища
      Data.getToken(JSON.parse(token))
      // Декодируем jwt token, чтобы получить из него tokenId
      Data.getTokenId(jwt_decode(token))
      navigate('/Shopping')
    } else {
      navigate('/')
    }
  }, [])


  return (
    <>
      <Header/>
      <Main>
        <Routes>
          <Route exact  path="/" element={<Home/>}/>
          <Route path="/Shopping" element={<Shopping token={Data.token}/>}/>
        </Routes>
      </Main>
      <Footer/>
    </>
    
  );
});

export default App;
