//opg 1a.
function splitLinje(tekst) {
    return tekst.split("\n")
}

let resultat=splitLinje("A\nB\nC\n");
console.log(resultat); 


// 1 c)

function sum(splitArray){
    const list = document.createElement('ul')
    section2.append(list)

    for (let i = 0; i < splitArray.length - 1; i++){
        const listElement = document.createElement('li')
        const result = parseFloat(splitArray[i]) + parseFloat((splitArray)[i + 1])
        

        listElement.textContent = result.toFixed(2)
        list.append(listElement)
    }
}


//opg 1c. 




// 2 a)

const toDoInput = document.createElement('input')
const section3 = document.createElement('section')
const toDoButton = document.createElement('button')
const toDoList = document.createElement('ul')
toDoButton.textContent = 'add ToDo item'
body.append(section3)
section3.append(toDoInput)
section3.append(toDoButton)
section3.append(toDoList)

toDoButton.addEventListener('click', () => {
    const listElement = document.createElement('li')
    const removeButton = document.createElement('button')
    removeButton.textContent = 'remove'
    const userInput = toDoInput.value
    
    listElement.textContent = userInput
    listElement.append(removeButton)
    toDoList.append(listElement)

    removeButton.addEventListener('click', () => {
        listElement.remove()
    })

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    listElement.prepend(checkbox)
    
    checkbox.addEventListener('change', () => {
        if (checkbox.checked){
            listElement.style.textDecoration = 'line-through';
        } else{
            listElement.style.textDecoration = 'none';
        }
    })
})
