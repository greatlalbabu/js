
let cards =[]  // array - to list of all items
let sum = 0
let hashBlackjack = false
let isAlive = true
let message = ""

let messageEL = document.getElementById("message-el")
// let sumEL = document.getElementById("sum-el")
let sumEL = document.querySelector("#sum-el")
let cardsEL = document.getElementById("cards-el")
let player={
      name : "Lalbabu",
     bucks : 2000
}


let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name+": "+ "Rs. "+player.bucks



function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13)+1
    if(randomNumber>10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}


function startGame(){
    let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard, secondCard]
sum = firstCard + secondCard
    renderGame()
}

 function renderGame(){
    sumEL.textContent = "Sum: " + sum
    // cardsEL.textContent= "Cards: "+ firstCard +" "+ secondCard
    cardsEL.textContent = "Cards: " 
    for(let i=0; i<cards.length; i++){
        cardsEL.textContent += cards[i]+" "

    }
    if(sum <=20){
        message= "Do You want a new cards"
     } else if(sum ===21){
         message= "You are in game "
         hashBlackjack = true
     }else{
         message = "you are not in game"
         isAlive = false
     }
     messageEL.textContent = message
 }

 function newCard(){
    if(isAlive === true && hashBlackjack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame();
     }
    }
   



