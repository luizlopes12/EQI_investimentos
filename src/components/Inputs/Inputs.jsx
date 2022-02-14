import React,{useState} from 'react'

function Inputs({indicadores}) {
    const ipca = indicadores != false && indicadores[1].valor
    const [rendimento, setRendimento] = useState(false)
    const [aporteInicial, setAporteInicial] = useState(false)
    const handleRendimento = (rend) =>{
        rend !== false && setRendimento(rend) 
    }
    const handleAporteInicial = (valor) =>{
      valor !== false && setAporteInicial(valor) 
    }
    const formSubmit = (e) =>{
        e.preventDefault()
        console.log(rendimento);
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
          <input type="text" onChange={()=>handleAporteInicial(aporteInicial)}/>
        </div>
        <div>
          <p>Prazo (em meses)</p>
          <input type="text" />
        </div>
        <div>
          <p>IPCA (ao ano)</p>
          <input type="text" value={ipca} readOnly/>
        </div>
        <button type='submit'>enviar</button>
        </form>
    </>
  )
}

export default Inputs