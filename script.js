let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userch=document.querySelector("#user-score");
const compch=document.querySelector("#comp-score");
const gencompscore=() => {
   const options=["rock", "paper", "scissor"];
   const randIdx=Math.floor(Math.random() *3);
   return options[randIdx];
}
const drawgame=() => {
    console.log("game was draw");
    msg.innerText="Game Was Draw! Play Again.";
    msg.style.backgroundColor=" #081b31";
};
showWinner=(userwin,compchoice,userchoice) => {
    if(userwin){
        userscore++;
        userch.innerText=userscore;
        console.log("You Win!");
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
       
    }else{
        compscore++;
        compch.innerText=compscore;
        console.log("You lose");
        msg.innerText=`You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        
    }
};
const playgame = (userchoice) => {
    console.log("user choice", userchoice);
    const compchoice=gencompscore();
    console.log("comp choice", compchoice);
    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            //paper, scissor
            userwin=compchoice==="paper"? false:true;
        }else if(userchoice==="paper"){
            //rock, scissor
            userwin=compchoice==="rock"? true:false;
        }else{
            //rock, paper
            userwin=compchoice==="rock"? false:true;
        }
        showWinner(userwin, compchoice, userchoice);
    }
};

choices.forEach((choice)=> {
    choice.addEventListener("click",()=> {
        
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    });
});
let rst=document.querySelector(".reset");
rst.onclick= () => {
    userscore=0;
    compscore=0;
    userch.innerText=userscore;
    compch.innerText=compscore;
    msg.innerText="Play your move";
    msg.style.backgroundColor="#081b31"

};
