let choices = document.querySelectorAll(".choices")
let msg= document.querySelector("#msg")
const userscorenew = document.querySelector("#userscore")
const compscorenew = document.querySelector("#compscore")
let userscore = 0
let compscore = 0

const compchoice = () => {
   let random= Math.floor(Math.random()*3);
    let array=["stone","paper","scissors"]
return array[random]
}
const result =(userwin,comp,userchoice)=> {
    if (userwin){userscore++;
        userscorenew.innerText = userscore
 msg.innerText ="Congrates, Your "+userchoice+" Beats "+comp;
 msg.style.backgroundColor="rgb(255,255,00,0.7)";
 msg.style.color=" rgb(243, 10, 150,0.8)";
    }
    else{compscore++;
        compscorenew.innerText = compscore
        msg.innerText ="Sorry, "+comp+" Beats Your "+userchoice;
        msg.style.backgroundColor="rgb(200,00,00,0.8)";
        msg.style.color="yellow";
    }}


const draw =() => {msg.innerText= "Game is Drawn. Play Again...";
    msg.style.backgroundColor="aqua"  ;
    msg.style.color=" rgb(243, 10, 150,0.8)";
};

const playgame = (userchoice) => {//console.log("your choice is",userchoice);
    let comp= compchoice()
    //console.log("computer choice is",comp);
if (userchoice === comp){draw()

}
else{
    let userwin = true;
    if(userchoice === "stone"){userwin = comp=== "paper" ? false: true}
    else if ( userchoice === "paper"){userwin = comp=== "scissors" ? false: true}
    else { userwin = comp=== "stone" ? false: true};
     result(userwin,comp,userchoice)}
}

    choices.forEach((choice) => {
        choice.addEventListener("click",()=> {const userchoice = choice.getAttribute("id");
        playgame(userchoice)})})
            
