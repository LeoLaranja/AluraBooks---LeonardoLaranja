function aplicarDesconto(livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(element => {
        return {...element, preco: element.preco - (element.preco * desconto)}
    })
    return livrosComDesconto
}
