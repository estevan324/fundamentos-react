export default (props) => {
    const { min, max } = props
    let number = Math.round(Math.random() * (max - min) + min)
    return (
        <div>
            <h3>Sorteio de um número entre { min } e { max }</h3>
            <p>
                O número sorteado foi:
                <strong> {number}</strong>
            </p>
        </div>
    )
}