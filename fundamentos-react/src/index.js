import './index.css'
import ReactDom from 'react-dom'

// Na nova versão do React, não necessita importar o React para renderização de JSX
import React from 'react'

const elem = document.getElementById('root')
const tag = <strong>Olá React!</strong>

ReactDom.render(
    <div>
        { tag }
    </div>, 
    elem
)