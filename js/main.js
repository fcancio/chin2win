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
        answerTwo: 'obama',
    },
    {
        chinImg: 'imgs/Beyonce_chin.png',
        fullImg: 'imgs/Beyonce.jpg',
        answer: 'beyonce',
        answerTwo: 'beyoncé',
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
        answerTwo: 'trump',
    },
    {
        chinImg: 'imgs/Jay-Z_chin.png',
        fullImg: 'imgs/Jay-Z.jpg',
        answer: 'jay z',
        answerTwo: 'jay-z',
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
        answerTwo: 'tony stark',
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
        answerTwo: 'dwayne johnson',
    },
    {
        chinImg: 'imgs/TomHolland_chin.png',
        fullImg: 'imgs/TomHolland.jpg',
        answer: 'tom holland',
        answerTwo: 'spiderman',
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
        chinImg: 'imgs/homersimpson_chin.jng',
        fullImg: 'imgs/homersimpson.jpg',
        answer: 'homer simposon',
    },
]

const corrMsgArr = ["You got it!", "Way to know that chin!", "I knew you would get it!", "YEAH!", "That was a good one.", "So obvi."]
const wrongMsgArr = ["Hmm...not quite.", "So close! JK!", "Guess again!", "How's your spelling?", "Not the chin we're looking for...", "Try again.", "Don't give up now!", "So close...maybe.", "Wow. Wrong."]
const defaultMsgArr = ['But do you know to whom this chin belongs?', 'Who dis?', 'NAME. THAT. CHIN!', 'Guess the chin....2 win!']


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


/*----- event listeners -----*/ 
submitButton.addEventListener('click', submitGuess)
nextButton.addEventListener('click', nextImage)

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
    let chinAnswerTwo = chins[rndImgIdx].answerTwo
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
    chins.length === 0 ? displayResult.innerHTML = `Congrats! You knew ${score} chins!` : render()

    getChinImage()
}


function updateChins() {
    chins.splice(rndImgIdx, 1)
}


function render() {
defaultMsgIdx = Math.floor(Math.random() * defaultMsgArr.length);

    displayResult.innerHTML = defaultMsgArr[defaultMsgIdx];
        displayResult.style.color="black"
        displayResult.style.fontStyle="italic"
    nextButton.style.color = 'white';
    photoContainer.removeChild(faceImage)
    getChinImage();
    
    //if there are no more chins, alert user of final score
}

