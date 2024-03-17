let gameSeq=[];
let userSeq=[];

let btns = ["red","yellow","blue","purple"];

let gameStarted =false  ;
let level = 0;

let h4 = document.querySelector('h4');

document.addEventListener("keypress",function(){
   if(gameStarted==false){
    console.log("game gameStarted");
    gameStarted=true;
    levelUp();
   }
});

function btnFlash(btn){
     btn.classList.add("flash");
     setTimeout(function(){
       btn.classList.remove("flash");
     },250);
}

function btnUserFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
      btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h4.innerText = `Level ${level}`;
    let randIndx =Math.floor(Math.random()*4);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h4.innerHTML=`Game Over! Your score was <b>${level-1}</b> <br/>Press any key to start the game`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(() => {
        document.querySelector('body').style.backgroundColor="white";
        }, 150);
        reset();
    }
}

function btnPress(){
    
    let btn = this;
    userColor = this.getAttribute("id");
    userSeq.push(userColor);
    
    btnUserFlash(btn);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    gameStarted=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}