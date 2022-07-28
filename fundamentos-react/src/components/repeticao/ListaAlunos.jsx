import alunos from '../../data/alunos'

export default () => {
    const alunosJSX = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                { aluno.id }) {aluno.nome} -{'>'} {aluno.nota}
            </li>
        )
    })

    return (
        <div>
            <ul style={{ listStyle: 'none'}}>
                { alunosJSX }
            </ul>
        </div>
    )
}