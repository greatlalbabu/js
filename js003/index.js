// let person = {
//     name: "Lalbabu",
//     age : 35,
//     country: "Norway"
// }

// function logData(){
//     console.log(person.name+" is "+ person.age+ " years old living in "+ person.country)
// }

// console.log(logData())

// let hands= ["Rocks", "Paper", "Scissor"]

// function getHands(){
//   let randomIndex = Math.floor(Math.random()*3)
//   return hands[randomIndex]
// }

// console.log(getHands())
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]


let pickEmoji = document.getElementById("fighter")


function pick(){
    let randomIndexOne = Math.floor(Math.random()*fighters.length)
    let randomIndexTwo = Math.floor(Math.random()*fighters.length)

    pickEmoji.textContent= fighters[randomIndexOne]+" Vs " + fighters[randomIndexTwo]
    
}