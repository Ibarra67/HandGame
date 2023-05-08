const rockBtn = document.querySelector('rock-btn');
const paperBtn = document.querySelector('paper-btn');
const scissorBtn = document.querySelector('scissor-btn');

function clickRockBtn(){
    let result = '';
    let random = Math.round(Math.random() * 3);

    if (random == 0){
        result = 'rock';
        alert('Computer: ' +result+ '\nDraw');
    }
    else if (random == 1){
        result = 'paper';
        alert('Computer: ' +result+ '\nYou Lose')
    }
    else if (random == 2) {
        result = 'scissor';
        alert('Computer: ' +result+ '\nyou Win');
    }
}

function clickPaperBtn(){
    let result = '';
    let random = Math.round(Math.random() * 3);

    if (random == 0){
        result = 'paper';
        alert('Computer: ' +result+ '\nDraw');
    }
    else if (random == 1){
        result = 'scissor';
        alert('Computer: ' +result+ '\nYou Lose')
    }
    else if (random == 2) {
        result = 'rock';
        alert('Computer: ' +result+ '\nyou Win');
    }
}

function clickScissorBtn(){
    let result = '';
    let random = Math.round(Math.random() * 3);

    if (random == 0){
        result = 'scissor';
        alert('Computer: ' +result+ '\nDraw');
    }
    else if (random == 1){
        result = 'rock';
        alert('Computer: ' +result+ '\nYou Lose')
    }
    else if (random == 2) {
        result = 'paper';
        alert('Computer: ' +result+ '\nyou Win');
    }
}