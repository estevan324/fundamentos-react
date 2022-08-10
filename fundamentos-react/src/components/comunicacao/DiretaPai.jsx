import DiretaFilho from "./DiretaFilho"

export default props => {
    return (
        <div>
            <DiretaFilho nome='Júnior' idade={20} nerd={true}/>
            <DiretaFilho nome='Gabriel' idade={17} nerd={false}/>
        </div>
    )
}