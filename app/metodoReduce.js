function calcularValorTotalDeLivrosDisponiveis(livrosFiltrados) {
    return livrosFiltrados.reduce((acumular, livro) => acumular + livro.preco, 0).toFixed(2)
}
