import './Card.css'

export default props => {
    const cardStyle = {
        backgroundColor: props.color || '#008',
        borderColor: props.color || '#008'
    }
    return (
        <div className='card' style={cardStyle}>
            <div className='title'>{ props.titulo }</div>
            <div className='content'>
                { props.children }
            </div>
        </div>
    )
}