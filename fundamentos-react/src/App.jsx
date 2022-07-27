import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

export default () => {
    return (
        <div className='app'>
            <h1>Fundamentos React</h1>
            <div className='cards'>

                <Card titulo='#04 - Desafio Aleatório' color='#FA6900'>
                    <Aleatorio min={0} max={200} />
                </Card>

                <Card titulo='#03 - Erro: React Fragment' color='#E94C6F'>
                    <Fragmento />
                </Card>

                <Card titulo='#02 - Boletim Escolar (com parâmetro)' color='#E8B71A'>
                    <ComParametro
                        titulo="Situação do Aluno"
                        nome="João Carlos"
                        nota={6}
                    />
                </Card>

                <Card titulo='#01 - Criação do Primeiro Componente' color='#588C73'>
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}