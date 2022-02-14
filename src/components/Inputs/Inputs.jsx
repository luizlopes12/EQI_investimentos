import React,{useState, useEffect} from 'react'

function Inputs() {
    const [rendimento, setRendimento] = useState('')
    const handleRendimento = (rend) =>{
        rend !== '' && setRendimento(rend) 
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
        <button type='submit'>enviar</button>
        </form>
    </>
  )
}

export default Inputs