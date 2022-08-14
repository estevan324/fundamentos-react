export default props => {
    return (
        <div>
            <label htmlFor="qtdInput">Qtde de Números: </label>
            <input type="text" id="qtdInput" value={props.qtde} onChange={props.alterarValor}/>
        </div>
    )
}