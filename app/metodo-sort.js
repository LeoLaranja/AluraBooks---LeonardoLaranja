let ordenarPorPrecoBotao = document.getElementById('btnOrdenarPorPreco');
ordenarPorPrecoBotao.addEventListener('click', ordenarPrecos)

function ordenarPrecos () {
        let livrosOrdenados = livros.sort((a,b) => a.preco -b.preco)
        mostrarLivrosNaTela(livrosOrdenados);
}