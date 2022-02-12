import { useState, useEffect } from 'react';
import Container from './components/Container/Container'
import './global/globalStyle.css'
import {API} from './services/axios/API'

function App() {
  useEffect(() =>{
    API.get('/indicadores')
    .then(response =>{
      console.log('Deu certo\n', response.data)
    })
    .catch(error =>{
      console.log('Deu erro\n', error)
    })
    API.get('/simulacoes')
    .then(response =>{
      console.log('Deu certo\n', response.data)
    })
    .catch(error =>{
      console.log('Deu erro\n', error)
    })
  },[])
  return (
    <>
    <Container/>
    </>
  );
}

export default App;
