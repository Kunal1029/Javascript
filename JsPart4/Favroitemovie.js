//if user give "quit" or "guess correct fav movie" then program exit "
let mymovie = "Peaceful warrior";
let guess = prompt("Enter my fav. movie");
while((mymovie != guess) && (guess != "quit")){
   
    guess = prompt("Wrong guess Try again or type 'quit' if don't want to try");
}

if(guess == mymovie){
    console.log("congrats!!!")
}
else{
    console.log("You Quit")
}

