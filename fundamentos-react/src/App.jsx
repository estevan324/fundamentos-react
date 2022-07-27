import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default () => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Aleatorio 
                min={0}
                max={200}
            />
            <Fragmento />   
            <ComParametro
                titulo="Situação do Aluno"
                nome="João Carlos"
                nota={6}
            />
            <Primeiro></Primeiro>
        </div>
    )
}