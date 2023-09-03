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
    for(const combo of winningCombos){
        const [a,b,c]=combo;
        if(cells[a].textContent&&cells[a].textContent===cells[b].textContent && cells[a].textContent===cells[c].textContent){
            resultText.textContent='Player ${currentPlayer} wins!';
            isGameActive=false;
            resetButton.disabled=false;
        }
    }
    if ([...cells].every(cell=>cell.textContent !=='')){
        resultText.textContent="It's a draw!";
        isGameActive=false;
        resetButton.disabled=false;
    }
}
function handleReset(){
    cells.forEach(cell=>{
        cell.textContent='';
    });
    currentPlayer='X';
    resultText.textContent="player X's turn";
    isGameActive=true;
    resetButton.disabled=true;
}
cells.forEach(cell=>{
    cell.addEventListener('click',handleCellClick);
});
resetButton.addEventListener('click',handleReset);
resultText.textContent="player X's turn";