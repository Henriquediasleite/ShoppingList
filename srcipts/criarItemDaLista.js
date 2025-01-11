import gerarDiaDaSemana from "./gerarDiaDaSemana.js"
const inputItem = document.getElementById('input-item')
let contador = 0
export function criarItemDaLista() {
    
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
    const dataCompleta = gerarDiaDaSemana()

    const itemData = document.createElement('p')
    itemData.innerText = dataCompleta // Corrigido para atribuir ao itemData
    itemData.classList.add('texto-data')

    itemDaLista.appendChild(itemData) // Corrigido para anexar itemData ao itemDaLista

    return itemDaLista
}