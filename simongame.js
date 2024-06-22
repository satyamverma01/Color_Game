let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let btns=["yellow","red","purple","blue"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("Game Started");
    started=true;
    levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash"); 
    setTimeout(function(){
        btn.classList.remove("flash");},250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIndx=Math.floor(Math.random()*3);
    let randColor=btns[randIndx];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randIndx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    btnFlash(randbtn);
}
function checkAns(idx){
  if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    }
  }
  else{
    h2.innerHTML=`Game Over!Your score was <b>${level}</b><br> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
  }
}
function btnPress() {
     let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click",btnPress);
    }
    function reset(){
        started=false;
        gameSeq=[];
        userSeq=[];
        level=0;
    }

