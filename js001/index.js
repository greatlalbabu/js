
let countNumber = document.getElementById("counter")
let saveEL = document.getElementById("save-el")

let count = 0

function increment(){
    count +=1
    countNumber.innerText = count;
}

function decrement(){
    count -=1
    countNumber.innerText = count;
}


function save(){
    let countStr = " "+ count + " - "
   saveEL.innerText += countStr
   countNumber.textContent = 0
   count = 0
}

// save()

// let welcomeEL = document.getElementById("welcome-el")
// let myName = "Lalbabu Pasad"
// let myGreeting = "Hi, My Name is "

// welcomeEL.innerText = myGreeting +""+ myName
// console.log(welcomeEL)