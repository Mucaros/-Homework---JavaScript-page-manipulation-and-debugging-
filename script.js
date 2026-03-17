//opg 1a.
function splitLinje(tekst) {
    return tekst.split("\n")
}

let resultat=splitLinje("A\nB\nC\n");
console.log(resultat); 


//opg 1c. 
function summer(number){
    let resultat=[];
    for (let i=0; i < number.length-1; i++){
        resultat.push(number[i] + number[i+1]);
    }
    return resultat;
}

const number=[1,2,3,4];
const sum=summer(number);
const list=document.getElementById("resultat"); 

for(let i=0; i<sum.length; i++){
    const li=document.createElement("li");
    li.textContent=sum[i];
    list.appendChild(li);
}



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
