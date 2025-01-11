//* IMPORTANDO A FUNÇÃO QUE GERA O DIA DA SEMANA DO ARQUIVO ESPECIFICADO
import gerarDiaDaSemana from "./gerarDiaDaSemana.js"

//* SELECIONANDO O ELEMENTO DE INPUT PELO ID
const inputItem = document.getElementById('input-item')

//* INICIALIZANDO UM CONTADOR PARA OS CHECKBOXES
let contador = 0

//* FUNÇÃO QUE CRIA UM NOVO ITEM DA LISTA
export function criarItemDaLista() {
    
    if (inputItem.value === '') {
        alert('Por favor, insira um item')
        return //* SAINDO DA FUNÇÃO SE O CAMPO ESTIVER VAZIO
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
        if (inputCheckBox.checked) {  //* VERIFICANDO SE O CHECKBOX ESTÁ MARCADO
            nomeItem.style.textDecoration = 'line-through'   //* SE MARCADO, APLICANDO ESTILO DE RISCADO NO NOME DO ITEM
        } else {
            nomeItem.style.textDecoration = 'none' //* SE DESMARCADO, REMOVENDO O ESTILO DE RISCADO
        }
    })

    containerItemDaLista.appendChild(inputCheckBox)
    containerItemDaLista.appendChild(nomeItem)

    itemDaLista.appendChild(containerItemDaLista) //* ANEXANDO O CONTAINER AO ITEM DA LISTA
    const dataCompleta = gerarDiaDaSemana() //* CHAMANDO A FUNÇÃO QUE GERA A DATA E HORA

    const itemData = document.createElement('p')
    itemData.innerText = dataCompleta //* ATRIBUINDO A DATA GERADA AO ITEM
    itemData.classList.add('texto-data') //* ADICIONANDO CLASSE AO ELEMENTO DE DATA

    itemDaLista.appendChild(itemData)  //* ANEXANDO O ELEMENTO DE DATA AO ITEM DA LISTA

    return itemDaLista  //* RETORNANDO O ITEM DA LISTA COMPLETO
}