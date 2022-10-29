const number = prompt("Escolha um número")
let tabuada = ""

for(let i = 0; i <= 10; i++){
  tabuada += `${number} * ${i} = ${number * i}\n`
}

alert(tabuada)