//* SELECIONANDO O ELEMENTO QUE MOSTRA A MENSAGEM DE LISTA VAZIA
const mensagemListaVazia = document.querySelector('.menssagem-lista-vazia')

//* FUNÇÃO QUE VERIFICA SE A LISTA DE COMPRAS ESTÁ VAZIA
function verificarListaVazia(listaDeCompras) {
    const itensDaLista = listaDeCompras.querySelectorAll('li') //* SELECIONANDO TODOS OS ITENS DA LISTA (ELEMENTOS 'li')
    if(itensDaLista.length === 0) {
        mensagemListaVazia.style.display = 'block' //* SE A LISTA ESTIVER VAZIA, EXIBINDO A MENSAGEM
    } else {
        mensagemListaVazia.style.display = 'none' //* SE A LISTA NÃO ESTIVER VAZIA, OCULTANDO A MENSAGEM
    }
}


//* EXPORTANDO A FUNÇÃO PARA SER UTILIZADA EM OUTROS MÓDULOS
export default verificarListaVazia