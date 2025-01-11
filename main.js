const inputItem = document.getElementById('input-item')
const botaoAdicionar = document.getElementById('adicionar-item')
const listaDeCompras = document.getElementById('lista-de-compras')
let contador = 0

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault()
    if (inputItem.value === '') {
        alert('Por favor, insira um item')
        return
    }

    const itemDaLista = document.createElement('li') //* CRIA UM ELEMENTO LI
    const containerItemDaLista = document.createElement('div')
    containerItemDaLista.classList.add('lista-item-container')
    const inputCheckBox = document.createElement('input') //* CRIA UM ELEMENTO INPUT
    inputCheckBox.type = 'checkbox' //* TRANSFORMA O TIPO DO INPUT EM CHECKBOX
    inputCheckBox.id = 'checkbox-' + contador++
    const nomeItem = document.createElement('p')
    nomeItem.innerText = inputItem.value //* PEGA O TEXTO QUE FOI DIGITADO 

    inputCheckBox.addEventListener('click', () => {
        if (inputCheckBox.checked) {
            nomeItem.style.textDecoration = 'line-through'
        } else {
            nomeItem.style.textDecoration = 'none'
        }
    })

    containerItemDaLista.appendChild(inputCheckBox)
    containerItemDaLista.appendChild(nomeItem)

    itemDaLista.appendChild(containerItemDaLista)

    const diaDaSemana = new Date().toLocaleDateString('pt-BR', { weekday: 'long' })
    const data = new Date().toLocaleDateString('pt-BR')
    const hora = new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric' })

    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`
    const itemData = document.createElement('p')
    itemData.innerText = dataCompleta // Corrigido para atribuir ao itemData
    itemData.classList.add('texto-data')

    itemDaLista.appendChild(itemData) // Corrigido para anexar itemData ao itemDaLista

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