import React,{useState} from 'react'
import Graph from '../Graph/Graph' 
import {API} from '../../services/axios/API'
function Inputs({indicadores}) {
    const ipca = indicadores != false && indicadores[1].valor 
    const cdi = indicadores != false && indicadores[0].valor
    const [rendimento, setRendimento] = useState('')
    const [indexacao, setIndexacao] = useState('')
    const [aporteInicial, setAporteInicial] = useState('')
    const [aporteMensal, setAporteMensal] = useState('')
    const [prazo, setPrazo] = useState('')
    const [rentabilidade, setRentabilidade] = useState('')
    const [simulacao, setSimulacao] = useState('')
    const handleRendimento = (rend) =>{
      setRendimento(rend) 
    }
    const handleIndexacao = (indexacao) =>{
      setIndexacao(indexacao) 
    }
    const handleAporteInicial = (valor) =>{
      isNumber(valor)?
      setAporteInicial(valor) 
      :
      setAporteInicial('')
    }
    const handlePrazo = (valor) =>{
      isNumber(valor)?
      setPrazo(valor) 
      :
      setPrazo('')
    }
    const handleAporteMensal = (valor) =>{
      isNumber(valor)?
      setAporteMensal(valor) 
      :
      setAporteMensal('') 
    }
    const handleRentabilidade = (valor) =>{
      isNumber(valor)?
      setRentabilidade(valor)
      :
      setRentabilidade('') 
    }
    const formSubmit = () =>{
        let query = `?tipoIndexacao=${indexacao}&tipoRendimento=${rendimento}`;
        API.get(`/simulacoes${query}`)
        .then((response)=>{
          setSimulacao(response.data[0])
          console.log(response.data[0])
        })
        .catch((error)=>{
          console.log(error)
        })
        console.log(rendimento);
        console.log(aporteInicial);
        console.log(prazo);
        console.log(ipca)
        console.log(indexacao);
    }
    const clearInputs = () =>{
      setAporteInicial('')
      setAporteMensal('')
      setPrazo('')
      setRentabilidade('')
    }
    const isNumber = (str) =>{
      return !isNaN(parseFloat(str))
    }
  return (
    <>
        <h2>Simulador</h2>
        <form onSubmit={(e)=>e.preventDefault()}>
        <div>
          <div>
          <p>Rendimento</p>
          <label>bruto</label><input type="radio" name='rendimento' value='bruto' onChange={(e)=>handleRendimento(e.target.value)}/>
          <label>liquido</label><input type="radio" name='rendimento' value='liquido' onChange={(e)=>handleRendimento(e.target.value)}/>
          </div>
          <div>
            <p>Aporte Inicial</p>
            <input value={aporteInicial} onChange={(e)=>handleAporteInicial(e.target.value)}/>
          </div>
          <div>
            <p>Prazo (em meses)</p>
            <input value={prazo} onChange={(e)=>handlePrazo(e.target.value)}/>
          </div>
          <div>
            <p>IPCA (ao ano)</p>
            <input value={`${ipca}%`} readOnly/>
          </div>
        </div>
          <div>
            <div>
              <p>tipo de indexação</p>
                <label>PRÉ</label><input type="radio" name='indexacao' value='pre' onChange={(e)=>handleIndexacao(e.target.value)}/>
                <label>PÓS</label><input type="radio" name='indexacao' value='pos' onChange={(e)=>handleIndexacao(e.target.value)}/>
                <label>FIXADO</label><input type="radio" name='indexacao' value='ipca' onChange={(e)=>handleIndexacao(e.target.value)}/>
            </div>
            <div>
            <p>Aporte Mensal</p>
            <input value={aporteMensal} onChange={(e)=>handleAporteMensal(e.target.value)}/>
            </div>
            <div>
              <p>Rentabilidade</p>
              <input value={rentabilidade} onChange={(e)=>handleRentabilidade(e.target.value)}/>
            </div>
            <div>
              <p>CDI (ao ano)</p>
              <input value={`${cdi}%`} readOnly/>
            </div>
          </div>
          <button onClick={clearInputs}>Limpar campos</button>
          <button type='submit' onClick={formSubmit}>Simular</button>
        </form>

        <Graph/>
    </>
  )
}

export default Inputs