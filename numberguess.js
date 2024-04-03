// function checkAnswer(event){
//     event.preventDefault();
//     let val=Math.floor(Math.random()*10)+1;

//     while (true){
//         uinput=document.getElementById("numGuess").value;
//         if (uinput==val) {
//             document.getElementById('message').textContent="Correct! The number was "+val+". You guessed correctly.";
//             break;
//         }
//         else if(uinput>val){
//             document.getElementById('message').textContent="Too high! Try again.";
//         }
//         else if(uinput<1 || uinput>100){
//             document.getElementById('message').textContent="Invalid input! Please enter a number between 1 and 100.";
//             break;

//         }
//         else{
//             document.getElementById('message').textContent="Too low! Try again."; 
//         }
//     }
    
// }

let y = Math.floor(Math.random() * 100 + 1);
let guess = 1;

document.getElementById("submitguess").onclick = function() {
    let x = document.getElementById("numGuess").value;
    if (x == y) {
        document.getElementById('message').textContent="CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ";
        
    }
    else if (x > y) {
        guess++;
    document.getElementById('message').textContent="OOPS SORRY!! TRY A SMALLER NUMBER";
    }
     else {
        guess++;
        document.getElementById('message').textContent="OOPS SORRY!! TRY A GREATER NUMBER";
    }
}