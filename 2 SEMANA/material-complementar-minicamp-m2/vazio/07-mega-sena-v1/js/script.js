var state = {board:[], currentGame:[], savedGames:[]};

function start(){ 
    createBoard();
    newGame();

}
function createBoard(){
    state.board= [];

    for(var i = 1;  i<=60; i++) {
        state.board.push(i);
    }
}
function newGame(){
    resetGame();
    render(); 
}

function render() {
    renderBoard();
    renderButtons();
    renderSavedGames();

}
function renderBoard() {
    var divBoard = document.querySelector('#megasena-board');
    divBoard.innerHTML = '';

    var ulNumbers = document.createElement('ul');
    ulNumbers.classList.add('numbers');
    for(var i = 0; i<state.board.length; i++) {
        var currentNumber = state.board[i];

        var liNumber = document.createElement('li')
    liNumber.textContent = currentNumber;
    liNumber.classList.add('number');

    liNumber.addEventListener('click', handleNumberClick);

    if(isNumberInGamer(currentNumber)) {
        liNumber.classList.add('selected-number')
    }
    ulNumbers.appendChild(liNumber);
    }
    divBoard.appendChild(ulNumbers);
}
function handleNumberClick(event){
   var value = Number(event.currentTarget.textContent)
    if(isNumberInGamer(value)) {
        removeNumberFromGame(value)
    } else {
        addNumberToGame(value)
    }

    render();
}

function renderButtons(){
    var divButtons = document.querySelector('#megasena-buttons');
    divButtons.innerHTML = '';

    var buttonNewGame = createNewGameButton();
    var buttonRadomGame = createRandomGameButton();
    var buttonSaveGame = createSaveGameButton();

    divButtons.appendChild(buttonNewGame);
    divButtons.appendChild(buttonRadomGame);
    divButtons.appendChild(buttonSaveGame);
}
function createRandomGameButton() {
    var button = document.createElement('button');
    button.textContent = 'jogo aleatório';

    button.addEventListener('click', randomGame);

    return button;
}

function renderSavedGames() {
    var divSavedGames = document.querySelector('#megasena-saved-games');
    divSavedGames.innerHTML = '';

    if(state.savedGames.length === 0) {
        divSavedGames.innerHTML = '<p>nenhum jogo salvo</p>'
    } else {
        var ulSavedGames = document.createElement('ul');
        for (var i = 0; i<state.savedGames.length; i++) {
            var currentGame = state.savedGames[i];

            var liGame = document.createElement('li');
            liGame.textContent = currentGame.join(', ');

            ulSavedGames.appendChild(liGame);
        }

        divSavedGames.appendChild(ulSavedGames);
    }

}

function  createSaveGameButton(){
    var button = document.createElement('button');
    button.textContent = 'salvar jogo';
    button.disabled = !isGameComplete();

    button.addEventListener('click', saveGame);

    return button;
}
function createNewGameButton(){
    var button = document.createElement('button');
    button.textContent = 'novo jogo';

    button.addEventListener('click', newGame);

    return button;
}

function addNumberToGame(NumberToAdd) {
    if(NumberToAdd <1 || NumberToAdd > 60){
        console.error('numeor invalido', NumberToAdd)
        return;
    }
    if (state.currentGame.length >= 6){
        console.error('o jogo ja esta cheio');
        return;
    }

    if(isNumberInGamer(NumberToAdd)){
        console.error('este numero ja esta no jogo', NumberToAdd)
        return;
     }
    
    state.currentGame.push(NumberToAdd)
}

function removeNumberFromGame(numberToRemove) {
    if(numberToRemove <1 || numberToRemove > 60){
        console.error('numeor invalido', numberToRemove)
        return;
    }
    var newgame = []

    for(var i =0; i<state.currentGame.length; i++) {
        var currentNumber = state.currentGame[i];

        if(currentNumber === numberToRemove) {
            continue;
        }
        newgame.push(currentNumber);
    }
    state.currentGame = newgame
}
function isNumberInGamer(numberToCheck){
    if(state.currentGame.includes(numberToCheck)) {
        return true;
    }
     return false;
}
function saveGame() {
    if(!isGameComplete) {
        console.error('o jogo nao esta completo') ;
        return;
    }
    state.savedGames.push(state.currentGame);
    newGame();
    
}

function isGameComplete() {
    return state.currentGame.length === 6;
}
function resetGame() {
    state.currentGame = [];
}

function randomGame() {
     resetGame();

     while(!isGameComplete()){
     var randomNumber = Math.ceil( Math.random() * 60);
     addNumberToGame(randomNumber)
     }

     console.log(state.currentGame);
     render();
     
}

start();