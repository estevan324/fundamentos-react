import './ListaProdutos.css'
import produtos from '../../data/produtos'

export default () => {
    const produtosJSX = produtos.map((produto, i) => {
        return (
            <tr className={ i % 2 == 0 ? 'par' : 'impar'} key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })

    return (
        <div className='tabela-produtos'>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
                {produtosJSX}
            </table>
        </div>
    )
}