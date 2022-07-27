export default (props) => {
    let number = Math.round(Math.random() * (props.max - props.min) + props.min)

    return (
        <div>
            <h3>Sorteio de um número entre { props.min } e { props.max }</h3>
            <p>
                O número sorteado foi:
                <strong> {number}</strong>
            </p>
        </div>
    )
}