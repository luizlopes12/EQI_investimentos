import React from 'react';
import Inputs from '../Inputs/Inputs'
import './Container.css'
function Container({indicadores}) {
    return (
        <div className='container'>
            <header className='header'>
                <h1>Simulador de Investimentos</h1>
            </header>
            <main className='main'>
                <Inputs indicadores={indicadores != false && indicadores}/>
            </main>
        </div>

    );
}

export default Container;