import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'

export default () => {
    return (
        <div className='app'>
            <h1>Fundamentos React</h1>
            <div className='cards'>

                <Card titulo='#06 - Lista de Alunos' color='#00C8F8'>
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo='#05 - Componente com Filho' color='#00C8F8'>
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Joana" />
                        <FamiliaMembro nome="Ana" />
                    </Familia>
                </Card>

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