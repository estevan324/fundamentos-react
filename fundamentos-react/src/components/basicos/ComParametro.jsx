export default function ComParametro(params){
    let status = params.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return(
        <div>
            <h2>{ params.titulo }</h2>
            <p>
                { params.nome } tirou nota { params.nota } e está { status }
            </p>
        </div>
    )
}