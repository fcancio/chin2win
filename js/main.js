/*----- constants -----*/ 

const chins = [
    {
        chinImg: 'imgs/TomHanks_chin.png',
        fullImg: 'imgs/TomHanks.jpg',
        answer: 'tom hanks',
        clue1: ''
    },
    {
        chinImg: 'imgs/MichaelKeaton_chin.png',
        fullImg: 'imgs/MichaelKeaton.jpg',
        answer: 'michael keaton'
    },
    {
        chinImg: 'imgs/TinaFey_chin.png',
        fullImg: 'imgs/TinaFey.jpg',
        answer: 'tina fey'
    },
    {
        chinImg: 'imgs/ArnoldSchwarzenegger_chin.png',
        fullImg: 'imgs/ArnoldSchwarzenegger.jpg',
        answer: 'arnold schwarzenegger',
    },
    {
        chinImg: 'imgs/BarackObama_chin.png',
        fullImg: 'imgs/BarackObama.jpg',
        answer: 'barack obama', 
        answer2: 'obama',
    },
    {
        chinImg: 'imgs/Beyonce_chin.png',
        fullImg: 'imgs/Beyonce.jpg',
        answer: 'beyonce',
        answer2: 'beyoncé',
    },
    {
        chinImg: 'imgs/ChristianBale_chin.png',
        fullImg: 'imgs/ChristianBale.jpg',
        answer: 'christian bale',
    },
    {
        chinImg: 'imgs/DonaldTrump_chin.png',
        fullImg: 'imgs/DonaldTrump.jpg',
        answer: 'donald trump',
        answer2: 'trump',
    },
    {
        chinImg: 'imgs/Jay-Z_chin.png',
        fullImg: 'imgs/Jay-Z.jpg',
        answer: 'jay z',
        answer2: 'jay-z',
    },
    {
        chinImg: 'imgs/JenniferLawrence_chin.png',
        fullImg: 'imgs/JenniferLawrence.jpg',
        answer: 'jennifer lawrence'
    },
    {
        chinImg: 'imgs/MattDamon_chin.png',
        fullImg: 'imgs/MattDamon.jpg',
        answer: 'matt damon'
    },
    {
        chinImg: 'imgs/Rihanna_chin.png',
        fullImg: 'imgs/Rihanna.jpg',
        answer: 'rihanna',
    },
    {
        chinImg: 'imgs/RobertDowneyJr_chin.png',
        fullImg: 'imgs/RobertDowneyJr.jpg',
        answer: 'robert downey jr',
        answer2: 'tony stark',
    },
    {
        chinImg: 'imgs/ScarletJohansson_chin.png',
        fullImg: 'imgs/ScarletJohansson.jpg',
        answer: 'scarlet johansson',
    },
    {
        chinImg: 'imgs/TheRock_chin.png',
        fullImg: 'imgs/TheRock.jpg',
        answer: 'the rock',
        answer2: 'dwayne johnson',
    },
    {
        chinImg: 'imgs/TomHolland_chin.png',
        fullImg: 'imgs/TomHolland.jpg',
        answer: 'tom holland',
        answer2: 'spiderman',
    },
    {
        chinImg: 'imgs/WillSmith_chin.png',
        fullImg: 'imgs/WillSmith.jpg',
        answer: 'will smith',
    },
    {
        chinImg: 'imgs/bigbird_chin.jpg',
        fullImg: 'imgs/bigbird.jpg',
        answer: 'big bird',
    },
    {
        chinImg: 'imgs/pikachu_chin.jpg',
        fullImg: 'imgs/pikachu.png',
        answer: 'pikachu',
    },
    {
        chinImg: 'imgs/homersimpson_chin.jpg',
        fullImg: 'imgs/homersimpson.jpg',
        answer: 'homer simpson',
    },
]
const corrMsgArr = 
    ["You got it!", 
    "Way to know that chin!", 
    "I knew you would get it!", 
    "YEAH!", 
    "That was a good one.", 
    "So obvi."]
const wrongMsgArr = 
    ["Hmm...not quite.", 
    "So close! JK!", 
    "Guess again!", 
    "How's your spelling?", 
    "Not the chin we're looking for...", 
    "Try again.", 
    "Don't give up now!", 
    "So close...maybe.", 
    "Wow. Wrong.",
    "Buzz's girlfriend, Woof."
]
const defaultMsgArr = 
    ['But do you know to whom this chin belongs?', 
    'Who dis?', 
    'NAME. THAT. CHIN!', 
    'Guess the chin....2 win!', 
    'Whose chin even IS this?']
const gameOverMsgArr = [
    "Congrats! You know your chins!",
    "HOW many chins!?  I approve. Thanks for playing!",
    "Well, it's been fun!  'Til next chin..."
]

/*----- app's state (variables) -----*/ 
let score, rndImgIdx, corrMsgIdx, wrongMsgIdx, defaultMsgIdx


/*----- cached element references -----*/ 
let photoContainer = document.getElementById('photo')
let scoreEl = document.querySelector('.counter')
let inputEl = document.querySelector('.userText')
let displayResult = document.querySelector('.result')
let nextButton = document.querySelector('.next')
let submitButton = document.querySelector('.submit')
let chinImage = document.createElement("img")
let faceImage = document.createElement("img")
let herm = document.createElement("img")
let resetButton = document.querySelector(".reset")

/*----- event listeners -----*/ 
submitButton.addEventListener('click', submitGuess)
nextButton.addEventListener('click', nextImage)
resetButton.addEventListener('click', init)


/*----- functions -----*/
init();

function init() {
    score = 0;
    getChinImage();
    render();
}


function getChinImage() {
    rndImgIdx = Math.floor(Math.random() * chins.length);
    chinImage.setAttribute("src", `${chins[rndImgIdx].chinImg}`)
    photoContainer.appendChild(chinImage).style.border='2px solid black'
}


function getFullImage() {
        faceImage.setAttribute("src", `${chins[rndImgIdx].fullImg}`)
        photoContainer.removeChild(chinImage)
        photoContainer.appendChild(faceImage)
        scoreEl.innerHTML = score;
}


function submitGuess() {
    // when button is clicked, compare player's input with chins[i].answer
    let chinAnswer = chins[rndImgIdx].answer
    let chinAnswerTwo = chins[rndImgIdx].answer2
    corrMsgIdx = Math.floor(Math.random() * corrMsgArr.length);
    wrongMsgIdx = Math.floor(Math.random() * wrongMsgArr.length);
    inputEl = document.querySelector('input').value.toLowerCase()
    
    if(inputEl === chinAnswer || inputEl === chinAnswerTwo) {
        console.log(inputEl)
        console.log(chinAnswerTwo)
        console.log(inputEl === chinAnswerTwo)
        score ++
        displayResult.innerHTML = corrMsgArr[corrMsgIdx];
            displayResult.style.color = 'purple'
        document.querySelector('.userText').value=''
        nextButton.style.color = 'black';
        getFullImage()
        updateChins()
    } else {
        displayResult.innerHTML = wrongMsgArr[wrongMsgIdx];
            displayResult.style.color = 'red'
    }
}
    

function nextImage() {
    //if there are no more chins, alert user of final score 
    if(chins.length === 0) {
        displayResult.innerHTML = `Congrats! You've guessed ALL THE CHINS WE HAVE.  Tell all your friends that you know at least ${score} chins!`
    }
    else if(score === 3 || score === 6 || score === 9) {
        keepGoing();
    } else {
        render();
    }
}

function updateChins() {
    chins.splice(rndImgIdx, 1)
}


function render() {
    defaultMsgIdx = Math.floor(Math.random() * defaultMsgArr.length);
    scoreEl.innerHTML = score;
    displayResult.innerHTML = defaultMsgArr[defaultMsgIdx];
        displayResult.style.color="black"
        displayResult.style.fontStyle="italic"
    nextButton.style.color = 'white';
    resetButton.style.color = 'white';
    photoContainer.removeChild(faceImage)
    getChinImage();
    
}

function keepGoing() {
    let keepGoing = prompt("Want to keep going? Yes/No")  

    if(keepGoing.toLowerCase() == "yes") {
        render();
    } else if (keepGoing.toLowerCase() == "no") {
        console.log("user doesn't want to play anymore")
        photoContainer.removeChild(faceImage);
        gameOver();
    }
}


function gameOver() {
    gameOverMsgIdx = Math.floor(Math.random() * gameOverMsgArr.length);
        displayResult.innerHTML = gameOverMsgArr[gameOverMsgIdx];

    herm.src = 'imgs/herm_logo_new.jpg';
        photoContainer.append(herm)
    
    photoContainer.style.backgroundColor="white";
}

