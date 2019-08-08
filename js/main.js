/*----- constants -----*/ 

const chins = [
    {
        chinImg: 'imgs/TomHanks_chin.png',
        fullImg: 'imgs/TomHanks.jpg',
        answer: 'tom hanks',
        hint1: 'BFFs with a volleyball',
    },
    {
        chinImg: 'imgs/MichaelKeaton_chin.png',
        fullImg: 'imgs/MichaelKeaton.jpg',
        answer: 'michael keaton',
        hint1: 'Movie actor-- some may say the best Batman.',
    },
    {
        chinImg: 'imgs/TinaFey_chin.png',
        fullImg: 'imgs/TinaFey.jpg',
        answer: 'tina fey',
        hint1: 'Comedic actress who wears pink on Wednesdays.',
    },
    {
        chinImg: 'imgs/ArnoldSchwarzenegger_chin.png',
        fullImg: 'imgs/ArnoldSchwarzenegger.jpg',
        answer: 'arnold schwarzenegger',
        answer2: 'arnold',
        hint1: '"Who is your daddy, and what does he do?"',
    },
    {
        chinImg: 'imgs/BarackObama_chin.png',
        fullImg: 'imgs/BarackObama.jpg',
        answer: 'barack obama', 
        answer2: 'obama',
        hint1: 'Former P-R-E-S...',
    },
    {
        chinImg: 'imgs/Beyonce_chin.png',
        fullImg: 'imgs/Beyonce.jpg',
        answer: 'beyonce',
        answer2: 'beyonce knowles',
        hint1: "Need hot sauce? This singer's got some in her bag. swag.",
    },
    {
        chinImg: 'imgs/ChristianBale_chin.png',
        fullImg: 'imgs/ChristianBale.jpg',
        answer: 'christian bale',
        hint1: "The bottom half of his face starred in a movie",
    },
    {
        chinImg: 'imgs/DonaldTrump_chin.png',
        fullImg: 'imgs/DonaldTrump.jpg',
        answer: 'donald trump',
        answer2: 'trump',
        hint1: 'twitter famous',
    },
    {
        chinImg: 'imgs/Jay-Z_chin.png',
        fullImg: 'imgs/Jay-Z.jpg',
        answer: 'jay z',
        answer2: 'jay-z',
        hint1: "Considered one of the greatest rappers, beyond Reasonable Doubt.",
    },
    {
        chinImg: 'imgs/JenniferLawrence_chin.png',
        fullImg: 'imgs/JenniferLawrence.jpg',
        answer: 'jennifer lawrence',
        hint1: 'her big break was starring as the main character in a movie trilogy',
    },
    {
        chinImg: 'imgs/MattDamon_chin.png',
        fullImg: 'imgs/MattDamon.jpg',
        answer: 'matt damon',
        hint1: "He's wicked smaht.",
    },
    {
        chinImg: 'imgs/Rihanna_chin.png',
        fullImg: 'imgs/Rihanna.jpg',
        answer: 'rihanna',
        hint1: "Did you signal an 'SOS', which also happens to be the title of this singer's 2006 hit single?",
    },
    {
        chinImg: 'imgs/RobertDowneyJr_chin.png',
        fullImg: 'imgs/RobertDowneyJr.jpg',
        answer: 'robert downey jr.',
        answer2: 'robert downey jr',
        answer3: 'tony stark',
        hint1: 'This actor has played the same movie character for the past 10 years',
    },
    {
        chinImg: 'imgs/ScarlettJohansson_chin.png',
        fullImg: 'imgs/ScarlettJohansson.jpg',
        answer: 'scarlett johansson',
        hint1: 'This actress has played the same move character for the past 9 years',
    },
    {
        chinImg: 'imgs/TheRock_chin.png',
        fullImg: 'imgs/TheRock.jpg',
        answer: 'the rock',
        answer2: 'dwayne johnson',
        hint1: 'This personality was not initially famous for his roles in film, and is known for his cooking.',
    },
    {
        chinImg: 'imgs/TomHolland_chin.png',
        fullImg: 'imgs/TomHolland.jpg',
        answer: 'tom holland',
        answer2: 'spiderman',
        hint1: "My senses tell me you've seen this actor around the neighborhood.",
    },
    {
        chinImg: 'imgs/WillSmith_chin.png',
        fullImg: 'imgs/WillSmith.jpg',
        answer: 'will smith',
        hint1: 'This actor was once known for having a prada bag with a lotta stuff in it.'
    },
    {
        chinImg: 'imgs/bigbird_chin.jpg',
        fullImg: 'imgs/bigbird.jpg',
        answer: 'big bird',
        hint1: "Well, he's big and yellow."
    },
    {
        chinImg: 'imgs/pikachu_chin.jpg',
        fullImg: 'imgs/pikachu.png',
        answer: 'pikachu',
        hint1: 'It would behoove you to choose this loyal companion that lights up a room.',
    },
    {
        chinImg: 'imgs/homersimpson_chin.jpg',
        fullImg: 'imgs/homersimpson.jpg',
        answer: 'homer simpson',
        hint1: "You don't know this one? Make sure you type his full name, d'oh!",
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
    "Game over! Study up on those chins!",
    "HOW many chins!? Game over, but thanks for playing!",
    "Game over, but it's been fun!  'Til next chin..."
]

/*----- app's state (variables) -----*/ 
let score, wrongInp, rndImgIdx, corrMsgIdx, wrongMsgIdx, defaultMsgIdx, chinsInPlay


/*----- cached element references -----*/ 
let photoContainer = document.getElementById('photo')
let scoreEl = document.querySelector('.counter')
let inputEl = document.querySelector('.userText')
let displayResult = document.querySelector('.result')
let nextButton = document.querySelector('.next')
let submitButton = document.querySelector('.submit')
let hintButton = document.querySelector('.hint')
let chinImage = document.createElement("img")
let faceImage = document.createElement("img")
let herm = document.createElement("img")
    herm.src = 'imgs/herm_logo_new.jpg'
let resetButton = document.querySelector(".reset")


/*----- event listeners -----*/ 
submitButton.addEventListener('click', submitGuess)
nextButton.addEventListener('click', nextImage)
hintButton.addEventListener('click', giveHint)
resetButton.addEventListener('click', reset)


/*----- functions -----*/
gameInstructions();
init();

//initialize game by setting score and wrong guesses to 0, and displaying a chin
function init() {
    score = 0;
    wrongInp = 0;
    chinsInPlay = chins.slice()
    getChinImage();

}

/* render new image, new displayMsg and button styles
based on each button's functionality */
function render() {
    defaultMsgIdx = Math.floor(Math.random() * defaultMsgArr.length);
    scoreEl.innerHTML = score;
    displayResult.innerHTML = defaultMsgArr[defaultMsgIdx];
    displayResult.style.color='#615BFF';
    displayResult.style.fontStyle='italic';
    nextButton.style.color='white';
    resetButton.style.color='black';
    photoContainer.removeChild(faceImage);
    getChinImage();
}

//display a new random chin image from remaining chins
function getChinImage() {
    rndImgIdx = Math.floor(Math.random() * chinsInPlay.length);
    chinImage.setAttribute("src", `${chinsInPlay[rndImgIdx].chinImg}`);
    chinImage.height=350;
    photoContainer.appendChild(chinImage).style.border='2px solid black';
}

//display the full image of the chinbearer
function getFullImage() {
    hintButton.style.color='white';
    resetButton.style.color='white';
    faceImage.setAttribute("src", `${chinsInPlay[rndImgIdx].fullImg}`);
    photoContainer.removeChild(chinImage);
    photoContainer.appendChild(faceImage);
    scoreEl.innerHTML = score;
}

/*when user submits their guess, check if their answer is correct 
and display appropriate messaging */
function submitGuess() {
    let chinAnswer = chinsInPlay[rndImgIdx].answer;
    let chinAnswerTwo = chinsInPlay[rndImgIdx].answer2;
    corrMsgIdx = Math.floor(Math.random() * corrMsgArr.length);
    wrongMsgIdx = Math.floor(Math.random() * wrongMsgArr.length);
    inputEl = document.querySelector('input').value.toLowerCase();
    
    if(inputEl === chinAnswer || inputEl === chinAnswerTwo) {
        score ++;
        displayResult.innerHTML = corrMsgArr[corrMsgIdx];
        displayResult.style.color='#56B06D';
        document.querySelector('.userText').value='';
        nextButton.style.color='#56B06D';
        getFullImage();
        updateChins();
    } else if(inputEl !== '' && (inputEl !== chinAnswer || inputEl !== chinAnswerTwo)) {
        wrongInp++;
        displayResult.innerHTML = wrongMsgArr[wrongMsgIdx];
        displayResult.style.color='red';
        gameOver();
    } else {
        displayResult.innerHTML="But you didn't type anything to submit!";
    }
}

/* when next button is clicked, check if user has gone through all chins,
and check if milestones have been reached before rendering next image */
function nextImage() {
    hintButton.style.color="black";
    if(chinsInPlay.length === 0) {
        displayResult.innerHTML = `Congrats! You've guessed ALL THE CHINS WE HAVE.  
        Tell all your friends that you know at least ${score} chins!`;
        photoContainer.removeChild(faceImage);
        photoContainer.append(herm);
        davidBlaine();
    } else if(score === 5) { 
        cookieMonster()
    } else if(score === 10) {
        guyFieri()
    } else if(score === 15) {
        judgeJudy()
    } else {
        render()
    }
}

// when hint button is clicked, display hint
function giveHint() {
    let hint1 = chinsInPlay[rndImgIdx].hint1
    displayResult.innerHTML=hint1;
    displayResult.style.color='blue';
    hintButton.style.color='white';
}

// remove last displayed chin from array
function updateChins() {
    chinsInPlay.splice(rndImgIdx, 1);
}

// if player makes 5 incorrect guesses, the game ends
function gameOver() {
    if(wrongInp === 5) {
        photoContainer.removeChild(chinImage);
        photoContainer.appendChild(herm);
        gameOverMsgIdx = Math.floor(Math.random() * gameOverMsgArr.length);
        displayResult.innerHTML = gameOverMsgArr[gameOverMsgIdx];
    }
}

// alerts user to cookie monster milestone at 5 chins
function cookieMonster() {
    Swal.fire({
        title: '5 chins!',
        text: "Cookie Monster baked you a prize, but he eated it.",
        imageUrl: 'imgs/cookiemonster.PNG',
        imageWidth: 200,
        imageHeight: 200,
        animation: false
    });
    render();
}

// alerts user to guy fieri milestone at 10 chins
function guyFieri() {
    Swal.fire({
        title: '10 chins!',
        text: "The Mayor of Flavortown approves! On to the next burger! I mean, chin.",
        imageUrl: 'imgs/guyfieri.PNG',
        imageWidth: 200,
        imageHeight: 200,
        animation: false
    });
    render();
}

// alerts user to judge judy milestone at 15 chins
function judgeJudy() {
    Swal.fire({
        title: '15 chins!',
        text: "The jury's in, and all evidence points to you being GUILTY! ...Of being too good at this game.  Keep going!",
        imageUrl: 'imgs/judgejudy.JPG',
        imageWidth: 200,
        imageHeight: 200,
        animation: false
        });
        render()
}

// alerts user to david blaine milestone at 20 chins
function davidBlaine() {
    Swal.fire({
        title: '20 chins!',
        text: "Must be magic, because you got all 20 chins right! David Blaine is shook.",
        imageUrl: 'imgs/davidblaine.PNG',
        imageWidth: 200,
        imageHeight: 200,
        animation: false
        });
        render()
}

// alerts user game instructions at load
function gameInstructions() {
    Swal.fire({
        title: 'Pro Chin Tips:',
        text: "1. Spelling matters   2. Use full names when possible   3. Game over at 5 wrong guesses!",
        imageUrl: 'imgs/herm_logo_new.jpg',
        imageWidth: 250,
        imageHeight: 200,
        animation: false
    });
}

//reset the game and any user scores when resetButton is clicked
function reset() {
    defaultMsgIdx = Math.floor(Math.random() * defaultMsgArr.length);
    displayResult.innerHTML = defaultMsgArr[defaultMsgIdx];
    displayResult.style.color='#615BFF';
    nextButton.style.color='white';
    score = 0;
    scoreEl.innerHTML = score;
    wrongInp = 0;
    chinsInPlay = chins.slice()
    getChinImage();
    photoContainer.removeChild(herm);
}