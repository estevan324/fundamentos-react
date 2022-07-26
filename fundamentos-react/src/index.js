import ReactDom from 'react-dom'
import React from 'react'

const elem = document.getElementById('root')
const tag = <strong>Olá React!</strong>

ReactDom.render(
    <div>
        { tag }
    </div>, 
    elem
)