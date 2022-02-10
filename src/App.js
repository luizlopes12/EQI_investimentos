import { useState, useEffect } from 'react';
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
  },[])
  return (
    <div></div>
  );
}

export default App;
