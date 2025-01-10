const inputItem = document.getElementById('input-item')
const botaoAdicionar = document.getElementById('adicionar-item')
const listaDeCompras = document.getElementById('lista-de-compras')
let contador = 0

botaoAdicionar.addEventListener('click',(evento) => {
    evento.preventDefault()
    if(inputItem.value === ''){
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

    containerItemDaLista.appendChild(inputCheckBox)
    containerItemDaLista.appendChild(nomeItem)

    itemDaLista.appendChild(containerItemDaLista)
    listaDeCompras.appendChild(itemDaLista)
})