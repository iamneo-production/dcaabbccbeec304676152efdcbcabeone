const cells=document.querySelectorAll('.btn');
const resultText=document.querySelector('.result');
const resetButton=document.getElementById('reset-button');
let currentPlayer='X';
let isGameActive=true;
function handleCellClick(event){
    const cell=event.target;
    if (cell.textContent==='' && isGameActive){
        cell.textContent=currentPlayer;
        checkWinner();
        togglePlayer();
    }
}
function checkWinner(){
    const winningCombos=[
        [0,1,2],[3,4,5],[6,7,8],
    ]
}