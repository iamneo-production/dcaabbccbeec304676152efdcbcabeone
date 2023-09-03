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
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for(const)
}