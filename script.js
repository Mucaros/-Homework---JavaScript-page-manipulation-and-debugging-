//opg 1a.
function splitLinje(text) {
    return text.split("\n")
}

console.log(splitLinje("A\nB\nC\n"));


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


//opg 2.
function leggTil(){
    const input=document.getElementById("input");
    const tekst=input.value;
    const li=document.createElement("li");
    const checkbox=document.createElement("input");
    checkbox.type="checkbox"; 

    checkbox.onclick=function(){
        if (checkbox.checked){
            li.style.textDecoration="line-through";
        } 
        else {
            li.style.textDecoration="none";
        }
    }

    const span=document.createElement("span");
    span.textContent=tekst;

    const knapp=document.createElement("button");
    knapp.textContent="Slett"; 

    knapp.onclick=function(){
        li.remove();
    }

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(knapp);
    document.getElementById("liste").appendChild(li);
    input.value = "";
}
