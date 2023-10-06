let i =1;
while(i<=5){
    if(i==3){
        break;
    }
    console.log(i);
    i++
}

//if user give "quit" or "guess correct fav movie" then program exit "
let mymovie = "Peaceful warrior";
let guess = prompt("Enter my fav. movie");
while((mymovie != guess)){
   if(guess == "quit"){
    console.log("You exit")
    break;
   }
    guess = prompt("Wrong guess Try again or type 'quit' if don't want to try");
}

if(guess == mymovie){
    console.log("congrats!!!")
}

