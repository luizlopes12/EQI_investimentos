import { useState, useEffect } from 'react';
import Container from './components/Container/Container'
import './global/globalStyle.css'
import {API} from './services/axios/API'

function App() {
  const [indicadores, setIndicadores] = useState(false)

  useEffect(() =>{
    API.get('/indicadores')
    .then(response =>{
      setIndicadores(response.data)
      console.log('Deu certo\n', response.data)
    })
    .catch(error =>{
      console.log('Deu erro\n', error)
    })
  },[])
  return (
    <>
    <Container indicadores={indicadores}/>
    </>
  );
}

export default App;
