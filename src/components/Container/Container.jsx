import React from 'react';
import Inputs from '../Inputs/Inputs'
import './Container.css'
function Container({indicadores}) {
    return (
        <>
            <header>
                <h1>Simulador de Investimentos</h1>
            </header>
            <main>
                <Inputs indicadores={indicadores}/>
            </main>
        </>

    );
}

export default Container;