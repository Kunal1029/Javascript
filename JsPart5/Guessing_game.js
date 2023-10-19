const max = prompt("Enter the max number");

const random = Math.floor((Math.random() * max)+1);

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("You quit");
        break;
    }

    if(guess == random){
        document.write("Congrats ! correct !!");
        break;
    }
    else if(guess > random){
        guess = prompt("Your Guess is too large. Try again")
    }
    else
    {
        guess = prompt("Your guess is too small ! Please try again")
    }
}