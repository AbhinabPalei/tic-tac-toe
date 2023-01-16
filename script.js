console.log("Welcome to Tic Tac Toe")

let music = new Audio("sources/music.mp3")
let audioTurn = new Audio("https://firebasestorage.googleapis.com/v0/b/fire-and-earn.appspot.com/o/Abhinabfile%2FAUD-20230115-WA0006.mp3?alt=media&token=4be922f9-14ff-49c5-a828-ef9e71c3d32e")
let gameover = new Audio("sources/gameover.mp3")
let turn ="X"
let isgameover = false;

const changeturn = ()=>{
    return turn === "X" ? "0": "X"
}

const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
     let wins = [
      [0,1,2,],
      [3,4,5,],
      [6,7,8,],
      [0,3,6,],
      [1,4,7,],
      [2,5,8,],
      [0,4,8,],
      [2,4,6,],
 ]
 wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won "
        isgameover = true
        document.querySelector('.videobox').getElementsByTagName('video')[0].style.width = "100px";
        
        
    }
 })

} 
  

//game logic

let boxes =document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn;
            turn = changeturn();
            audioTurn.play();
            checkwin();
            if (!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
                
            }
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""

    });
    turn = "X";
    isgameover = false
    
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector('.videobox').getElementsByTagName('video')[0].style.width = "0px"


})