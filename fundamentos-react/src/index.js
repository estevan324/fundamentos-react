import './index.css'
import ReactDom from 'react-dom'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

ReactDom.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro
            titulo="Situação do Aluno"
            nome="João Carlos"
            nota={6}
        />
        <Fragmento/>
    </div>, 
    document.getElementById('root')
)