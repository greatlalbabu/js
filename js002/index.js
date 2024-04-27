
let firstName = "Lalbabu"
let lastName = "Prasad"

let fullName = firstName + " " + lastName
console.log(fullName)


let name = "Linda"
let greeting = "Hi there"

function my(){
    console.log(greeting+"," +" "+ name+"!")

}

my()


let myPoints  = 3

function add3Points(){
    myPoints = myPoints+3

}

function removePoints(){
    myPoints = myPoints-1

}

add3Points()
add3Points()
add3Points()

removePoints()
removePoints()


console.log(myPoints)

let purchagePrice = document.getElementById("error")

function purchages(){
    purchagePrice.textContent = "something went wrong. Please try Again!"
}

calculator challenge

let num1= 8
let num2 = 5

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let totalResult = document.getElementById("result")

function add(){
    let totalAdd = num1+num2
    totalResult.textContent ="sum: "+ totalAdd
}

function sub(){
    
    let totalSub = num1-num2
    totalResult.textContent ="Sum: " +totalSub
}


function mul(){
    let totalMul = num1*num2
    totalResult.textContent = "Sum: "+ totalMul
}


function div(){
    let totalDiv = num1%num2
    totalResult.textContent ="Sum: "+ totalDiv
}





