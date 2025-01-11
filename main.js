//* IMPORTANDO A FUNÇÃO CRIAR ITEM DA LISTA DO ARQUIVO ESPECIFICADO
import { criarItemDaLista } from "./srcipts/criarItemDaLista.js"
import verificarListaVazia from "./srcipts/verificarListaVazia.js"

const botaoAdicionar = document.getElementById('adicionar-item') 
const listaDeCompras = document.getElementById('lista-de-compras')

//* ADICIONANDO UM OUVINTE DE EVENTO AO BOTÃO QUE ESCUTA O CLIQUE
botaoAdicionar.addEventListener('click', (evento) => { 
    evento.preventDefault() //* PREVENINDO O COMPORTAMENTO PADRÃO DO FORMULÁRIO
    const itemDaLista = criarItemDaLista()  //* CHAMANDO A FUNÇÃO QUE CRIA UM NOVO ITEM DA LISTA
    listaDeCompras.appendChild(itemDaLista)  //* ADICIONANDO O NOVO ITEM À LISTA DE COMPRA
    verificarListaVazia(listaDeCompras)  //* VERIFICANDO SE A LISTA DE COMPRAS ESTÁ VAZIA
})

verificarListaVazia(listaDeCompras) //* VERIFICANDO A LISTA DE COMPRAS NO INÍCIO PARA GARANTIR QUE NÃO ESTÁ VAZIA