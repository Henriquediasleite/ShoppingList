import { criarItemDaLista } from "./srcipts/criarItemDaLista.js"

const botaoAdicionar = document.getElementById('adicionar-item')
const listaDeCompras = document.getElementById('lista-de-compras')

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault()
    const itemDaLista = criarItemDaLista()
    listaDeCompras.appendChild(itemDaLista)
    verificarListaVazia()
})

const mensagemListaVazia = document.querySelector('.menssagem-lista-vazia')

function verificarListaVazia() {
    const itensDaLista = listaDeCompras.querySelectorAll('li')
    if(itensDaLista.length === 0) {
        mensagemListaVazia.style.display = 'block'
    } else {
        mensagemListaVazia.style.display = 'none'
    }
}

verificarListaVazia()