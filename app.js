

//pegar o input
//Se for sim, mostra as categorias disponiveis, pergunta qual categoria a pessoa escolhe
//Se não, mostra todos os livros em ordem crescente pela quantidade de páginas

const livros = require("./database")
// console.log(livros)
const readline = require("readline-sync")

const entradaInicial = readline.question("Deseja buscar um livro? S/N")

if (entradaInicial.toLocaleUpperCase() === "S") {
    console.log("Essas são as categorias dispoíveis:")
    console.log("Produtividade", "/Estilo de vida", "/Tecnologia", "/Américas")

    const entradaCategoria = readline.question("Qual categoria você escolhe:")

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log("Essas são todos os livros disponíveis:")
    console.table(livrosOrdenados)
}