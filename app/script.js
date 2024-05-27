let livros = [];
let Api = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

async function mostrarLivrosApi() {
    const res = await fetch (Api);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros); //essa funcao esta definida em outro arquivo Js como metodo map
    mostrarLivrosNaTela (livrosComDesconto); //essa funcao esta definida em outro arquivo Js como metodo for Each
    console.table (livros)    
}
mostrarLivrosApi();

// PARA FACILITAR SALVAMOS CADA FUNÇÃO EM ARQUIVOS SEPARADOS E CHAMAMOS TODAS AS FUNCÇÕES AQUI NESSE ARQUIVO.

