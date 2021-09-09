function getWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        console.log('Tie');
        ties += 1;
        return 0;
    }
    else if (playerMove === 'rock' && computerMove === 'paper' ||
        playerMove === 'paper' && computerMove === 'scissors' || playerMove === 'scissors' && computerMove === 'rock') {
        console.log('The computer wins');
        losses += 1;
        return -1;
    }
    else {
        console.log('The player wins');
        wins += 1;
        return 1;
    }
}

let isConfirmed = true;
let exit = false;
let result = 0;
let wins = 0;
let losses = 0;
let ties = 0;


while (isConfirmed === true) {
    let valid = false;
    while(valid === false) {
        var playerMove = prompt("Please enter rock, paper or scissors:");
        if(playerMove === "rock" || playerMove === "paper" || playerMove === "scissors") {
            valid = true;
        }
        else if (playerMove === null){
            exit = true;
            valid = true;
        }
    }
        if (exit === true){
        break;}

let computerMove = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
result = Number(getWinner(playerMove, computerMove))+result;
isConfirmed = confirm((`The player move is: ${playerMove}.
The computer move is: ${computerMove}.
Player one Total Score: ${result}!
Total wins: ${wins}
Total losses: ${losses}
Total ties: ${ties}

Do you want to continue playing?`)
    );
}

//function to set all imgs to display: none
function imgsDisappear() {
for (const i in idsCpu) {
    document.querySelector(idsCpu[i]).style.display = 'none';
}
for (const i in idsPlayer) {
    document.querySelector(idsPlayer[i]).style.display = 'none';
}}

//functions which run when corresponding button(weapon) is clicked
//rock is 0, paper is 1, scissors is 2
let rock = document.querySelector('#rock');
console.log(rock);
let idsPlayer = ['#therock','#clippy', '#scissorhands', '#placeholder'];
let idsCpu = ['#theRockCpu', '#clippyCpu', '#scissorHandsCpu', '#placeholderCpu'];
let randomUpToTwo = 0
function clickHandler(event) {
    imgsDisappear()
    randomUpToTwo = Math.floor(Math.random() * 3)
    document.querySelector('#therock').style.display = 'block';
    document.querySelector(idsCpu[randomUpToTwo]).style.display = 'block';
    if(randomUpToTwo === 0) { 
        ties += 1
    } else if(randomUpToTwo === 2) {
        wins += 1; result += 1
    } else {
        losses += 1; result -= 1
    }
    outputData()
}
rock.addEventListener('click', clickHandler);


let paper = document.querySelector('#paper');
function clickHandler2(event) {
    randomUpToTwo = Math.floor(Math.random() * 3)
    imgsDisappear()
    document.querySelector('#clippy').style.display = 'block';
    document.querySelector(idsCpu[randomUpToTwo]).style.display = 'block';
    if(randomUpToTwo === 1) { 
        ties += 1
    } else if(randomUpToTwo === 0) {
        wins += 1; result += 1
    } else {
        losses += 1; result -= 1
    }
    outputData()
}
paper.addEventListener('click', clickHandler2);

let scissors = document.querySelector('#scissors');
function clickHandler3(event) {
    randomUpToTwo = Math.floor(Math.random() * 3)
    imgsDisappear()
    document.querySelector('#scissorhands').style.display = 'block';
    document.querySelector(idsCpu[randomUpToTwo]).style.display = 'block';
    if(randomUpToTwo === 2) { 
        ties += 1
    } else if(randomUpToTwo === 1) {
        wins += 1; result += 1
    } else {
        losses += 1; result -= 1
    }
    outputData()
}
scissors.addEventListener('click', clickHandler3);

//Updates the score data
function outputData() {
    inputList = document.querySelectorAll("li")
    outputList = [`total wins: ${wins}`, `total losses: ${losses}`, `total ties: ${ties}`, `total score: ${result}`]
    let i = 0
    while(i<outputList.length) {
        inputList[i].innerText = outputList[i]
        i++
    }}

let resetButton = document.querySelector('#resetButton');
function handleClickReset(event) {
    imgsDisappear()
    wins = 0; losses = 0; ties = 0; result = 0;
    outputData()
    usernameInput.style.display = "revert"
    pageSpacers.style.display = "revert"
    h3InnerText.innerText = "Choose your weapon!"
    document.querySelector('#placeholder').style.display = 'block';
    document.querySelector('#placeholderCpu').style.display = 'block';
}
resetButton.addEventListener('click', handleClickReset);

//Username entry box
//event when enter pressed -> input disappear and Username string appears in h3 element
h3InnerText = document.querySelector("h3")
pageSpacers = document.querySelector(".spacer")
usernameInput = document.querySelector('#username')
usernameInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        h3InnerText.innerText = `${usernameInput.value} choose your weapon!`;
        usernameInput.style.display = "none"
        console.log(e)
    }
})




