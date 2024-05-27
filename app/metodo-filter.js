const botoes = document.querySelectorAll('.btn');
const disponiveis = document.getElementById('btnLivrosDisponiveis');

botoes.forEach (element => element.addEventListener('click', filtrarLivros))
console.log(botoes)


function filtrarLivros () {
    const idBotao = document.getElementById(this.id)
    categoria = idBotao.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : FiltrarPorCategoria(categoria)
    mostrarLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    totalPrecoLivros.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}