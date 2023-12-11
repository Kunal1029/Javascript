let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;
let count = 0;

let h2 = document.querySelector("h2");

function levelup() {
  userSeq = [];
  level++;

  h2.innerText = `Level ${level}`;

  //random btn choose
  let randIDx = Math.floor(Math.random() * 3);
  let randColor = btns[randIDx];
  let randbtn = document.querySelector(`.${randColor}`);
  // console.log(randColor)
  // console.log(randIDx)
  // console.log(randbtn)
  // randbtn.innerText = "kunal"
  gameSeq.push(randColor);
  // console.log(gameSeq)
  gameFlash(randbtn);
}

// let btncount = 0;
// let kk = document.querySelectorAll(".btn");
// for (kk1 of kk) {
//   kk1.addEventListener("click", function (event) {
//     ++btncount;
//     if(level == 0 && btncount < 1){
//         console.log(btncount);
   
//     }
   
//   });
// }
// console.log(btncount);
if (level == 0) {
  document.addEventListener("keypress", function () {
    if (started == false) {
      // console.log("Game is started");
      started = true;

      levelup();
    }
  });

  function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
      btn.classList.remove("flash");
    }, 200);
  }

  function checkAns(idx) {
    // console.log("curr level : " , level)

    if (!(userSeq[idx] === gameSeq[idx])) {
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "pink";
      }, 1500);

      // console.log(++count);
      let tr = document.querySelector(".tr"); // total game lost
      tr.innerText = `You lost game ${++count} times`;

      h2.innerHTML = `game over!Your score was <b>${level}</b> <br> press any key to start`;
      reset();
    } else {
      if (userSeq.length == gameSeq.length) {
        setTimeout(levelup, 1000);
      }
      let max = level;
      if (level >= max) {
        max = level;
        let highScore = document.querySelector("p");
        highScore.innerText = `Your Total highest score is ${max}`;
      }
    }
  }

  function UserFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
      btn.classList.remove("userflash");
    }, 200);
  }

  function UserPress() {
    //btnPress
    // console.log(this)
    let btnclick = this;
    UserFlash(btnclick);
    // console.log(btnclick)

    let userColor = btnclick.getAttribute("id");
    // console.log(userColor)
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
  }

  let btnsall = document.querySelectorAll(".btn");
  for (btnallpress of btnsall) {
    btnallpress.addEventListener("click", UserPress);
  }

  function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
  }
}
