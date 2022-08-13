import { useState } from "react"
export default props => {
    const [valor, setValor] = useState('Inicial')
    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div>
            <div>
                {/* Componente Controlado */}
                <input value={valor} type="text" onChange={quandoMudar}/>

                {/* Componente não controlado */}
                <input value={undefined} type="text" />
            </div>
        </div>
    )
}