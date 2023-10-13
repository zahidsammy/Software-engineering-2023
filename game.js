function DiceRoll(Num1){
    Math.floor(Math.random() * Num1)

    let Result = Math.ceil(Math.random() * Num1)

      return Result  



}

console.log(DiceRoll(6))


function displaydiceRoll(dice){
    let show = DiceRoll(dice)
    document.getElementById('result').innerText= show
    

}