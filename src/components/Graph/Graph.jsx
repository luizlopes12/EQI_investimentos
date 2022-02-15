import React from 'react';
import './Graph.css'
function Graph({simulacao}) {
    return (
        <div className='graph'>
            {simulacao.aliquotaIR}<br/>
            {simulacao.ganhoLiquido}<br/>
            {simulacao.valorFinalBruto}<br/>
            {simulacao.valorFinalLiquido}<br/>
            {simulacao.valorPagoIR}<br/>
            {simulacao.valorTotalInvestido}<br/>
        </div>
    );
}

export default Graph;