//Q no 1 
//A no 1 

let userValue = prompt("Enter Your Positve Value ")
document.writeln(`<h2> Number = ${userValue} </h2>`)
console.log("Number = ",userValue)
let roundOfNumber =Math.round(userValue)
console.log("Round of Number = ",roundOfNumber)
document.writeln(`<h2> Round of Number = ${roundOfNumber} </h2>`)
let floorValue =Math.floor(userValue)
console.log("Floor Value = ",floorValue)
document.writeln(`<h2> Floor Value = ${floorValue} </h2>`)
let ceilValue =Math.ceil(userValue)
console.log("ceil Value = ",ceilValue)
document.writeln(`<h2> Ceil Value = ${ceilValue} </h2>`)

// Q no 2 
//A no 2 

let userValue1 = prompt("Enter Your Negative Value ")
document.writeln(`<h2> Number = ${userValue1} </h2>`)
console.log("Number = ",userValue1)
let roundOfNumber1 =Math.round(userValue1)
console.log("Round of Number = ",roundOfNumber1)
document.writeln(`<h2> Round of Number = ${roundOfNumber1} </h2>`)
let floorValue1 =Math.floor(userValue1)
console.log("Floor Value = ",floorValue1)
document.writeln(`<h2> Floor Value = ${floorValue1} </h2>`)
let ceilValue1 =Math.ceil(userValue1)
console.log("ceil Value = ",ceilValue1)
document.writeln(`<h2> Ceil Value = ${ceilValue1} </h2>`)

//Q no 3 
//A no 3 


let absoulteUserValue = prompt("Enter Your Absoulte Value")
let absoulteValue = Math.abs(absoulteUserValue)
console.log(absoulteValue)


//Q no 4 
//A no 4 

console.log(`Ramdom Number of dies -->  ${Math.floor(Math.random() * 7 )}`)


//Q no 5 
//A no 5 

let coinNumber = Math.floor(Math.random() * 2 )
if (coinNumber == 1 ){
    console.log("Tails")

}else {
    console.log("Heads")

}


//Q no 6 
//A no 6 


console.log(`Number 1 to 100 : ${Math.ceil(Math.random() * 100)}`)



//Q no 7 
//A no 7 








//Q no 8 
//A no 8 

let userNumberGame = prompt("Guess the number between 1-10")
let guessNumber = Math.floor(Math.random() * 10)
if (userNumberGame == guessNumber){
    console.log("Yahoooo Win!!")
}else {
    console.log("Try again")
}





