import React,{useState} from 'react'

function Inputs({indicadores}) {
    const ipca = indicadores != false && indicadores[1].valor
    const cdi = indicadores != false && indicadores[0].valor
    const [rendimento, setRendimento] = useState('')
    const [aporteInicial, setAporteInicial] = useState('')
    const [prazo, setPrazo] = useState('')
    const handleRendimento = (rend) =>{
      rend !== false && setRendimento(rend) 
    }
    const handleAporteInicial = (valor) =>{
      valor !== false && setAporteInicial(valor) 
    }
    const handlePrazo = (valor) =>{
      valor !== false && setPrazo(valor)
    }
    const formSubmit = (e) =>{
        e.preventDefault()
        console.log(rendimento);
        console.log(aporteInicial);
        console.log(prazo);
    }
  return (
    <>
        <h2>Simulador</h2>
        <form onSubmit={formSubmit}>
        <div>
        <p>Rendimento</p>
        <label>bruto</label><input type="radio" name='rendimento' value='bruto' onChange={()=>handleRendimento('bruto')}/>
        <label>liquido</label><input type="radio" name='rendimento' value='liquido' onChange={()=>handleRendimento('liquido')}/>
        </div>
        <div>
          <p>Aporte Inicial</p>
          <input value={aporteInicial} onChange={(event)=>handleAporteInicial(event.target.value)}/>
        </div>
        <div>
          <p>Prazo (em meses)</p>
          <input value={prazo} onChange={(event)=>handlePrazo(event.target.value)}/>
        </div>
        <div>
          <p>IPCA (ao ano)</p>
          <input value={ipca} readOnly/>
        </div>
        <button type='submit'>enviar</button>
        </form>
    </>
  )
}

export default Inputs