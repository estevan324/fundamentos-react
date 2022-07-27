import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

export default () => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Card titulo='#04 - Desafio Aleatório'>
                <Aleatorio min={0} max={200} />
            </Card>

            <Card titulo='#03 - Erro: React Fragment'>
                <Fragmento />
            </Card>

            <Card titulo='#02 - Boletim Escolar (com parâmetro)'>
                <ComParametro
                    titulo="Situação do Aluno"
                    nome="João Carlos"
                    nota={6}
                />
            </Card>

            <Card titulo='#01 - Criação do Primeiro Componente'>
                <Primeiro></Primeiro>
            </Card>
        </div>
    )
}