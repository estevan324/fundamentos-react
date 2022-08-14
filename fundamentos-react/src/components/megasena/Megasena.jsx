import { useState } from "react"
import Display from "./Display"
import QtdInput from "./qtdInput"

export default props => {
    function gerarNumeros(valor){
        let numMegasena = []
        for (let i = 0; i < valor; i++) {
            let numGerado = Math.round(Math.random() * (60 - 1 + 1) + 1)
            numMegasena.includes(numGerado) ? i-=1 : numMegasena.push(numGerado)
        }
        return numMegasena
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    
    const numerosInicias = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosInicias)
    
    return (
        <div>
            <Display numeros={numeros}/>
            <QtdInput qtde={qtde} alterarValor={e => setQtde(e.target.value)}/>
            <button onClick={ _ => setNumeros(gerarNumeros(qtde)) }>Gerar Números</button>
        </div>
    )
}


