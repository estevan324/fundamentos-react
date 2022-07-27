import './index.css'
import ReactDom from 'react-dom'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDom.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro
            titulo="Situação do Aluno"
            nome="João Carlos"
            nota={6}
        />
    </div>, 
    document.getElementById('root')
)