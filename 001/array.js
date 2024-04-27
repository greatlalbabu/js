// 
for(let i =10; i<=100; i+=10){
    console.log(i);
}

let cards = [7, 6, 9]

for(let i =0; i<=cards.length; i++){
    console.log(cards[i])
}

let sentence = ["Hello", "my", "name", "is", "Lalbabu Prasad"]
let greetingEL = document.getElementById("greeting-el")

for(let i = 0; i<sentence.length; i++){
    greetingEL.textContent += sentence[i]+" "
}