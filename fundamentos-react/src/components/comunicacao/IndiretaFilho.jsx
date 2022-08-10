export default props => {
    const cb = props.cliqueBotao
    const gerarIdade = () => parseInt(Math.random() * (20) + 50)
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={ _ => cb('João', gerarIdade(), gerarNerd())}>
                Mostrar Informações
            </button>
        </div>
    )
}