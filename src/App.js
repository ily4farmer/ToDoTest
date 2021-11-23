import React from 'react';
import {HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Main } from "./globalStyles";
import Home from "./Route/Home";
import Shopping from "./Route/Shopping";

function App() {
  return (
    <HashRouter>
      <Header/>
      <Main>
        <Routes>
          <Route exact  path="/" element={<Home/>}/>
          <Route path="/Shopping" element={<Shopping/>}/>
        </Routes>
      </Main>
      <Footer/>
    </HashRouter>
    
  );
}

export default App;
