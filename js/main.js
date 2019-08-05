/*----- constants -----*/ 

const chins = [
    {
        chinImg: 'imgs/TomHanks_chin.png',
        fullImg: 'imgs/TomHanks.jpg',
        answer: 'tom hanks',
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
    },
    {
        chinImg: 'imgs/Beyonce_chin.png',
        fullImg: 'imgs/Beyonce.jpg',
        answer: 'beyonce',
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
    },
    {
        chinImg: 'imgs/Jay-Z_chin.png',
        fullImg: 'imgs/Jay-Z.jpg',
        answer: 'jay z',
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
        answer: 'rihanna'
    },
    {
        chinImg: 'imgs/RobertDowneyJr_chin.png',
        fullImg: 'imgs/RobertDowneyJr.jpg',
        answer: 'robert downey jr'
    },
    {
        chinImg: 'imgs/ScarletJohansson_chin.png',
        fullImg: 'imgs/ScarletJohansson.jpg',
        answer: 'scarlet johansson'
    },
    {
        chinImg: 'imgs/TheRock_chin.png',
        fullImg: 'imgs/TheRock.jpg',
        answer: 'the rock',
    },
    {
        chinImg: 'imgs/TomHolland_chin.png',
        fullImg: 'imgs/TomHolland.jpg',
        answer: 'tom holland'
    },
    {
        chinImg: 'imgs/WillSmith_chin.png',
        fullImg: 'imgs/WillSmith.jpg',
        answer: 'will smith'
    },
]

/*----- app's state (variables) -----*/ 
let score, image, rndImgIdx, image2


/*----- cached element references -----*/ 
let photoContainer = document.getElementById('photo')
let scoreEl = document.querySelector('.counter')
let inputEl = document.querySelector('.userText')
let displayResult = document.querySelector('.result')
let nextButton = document.querySelector('.next')
let submitButton = document.querySelector('.submit')


/*----- event listeners -----*/ 
submitButton.addEventListener('click', submitGuess)
nextButton.addEventListener('click', nextImage)

/*----- functions -----*/
init();

function init() {
    score = 0;
    getChinImage();
}
render();


function render() {
    scoreEl.innerHTML = score;
    photoContainer.removeChild(image);
    getChinImage();
    
    
    //if there are no more chins, alert user of final score
}


function getChinImage() {
    rndImgIdx = Math.floor(Math.random() * chins.length);
    image = document.createElement("img")
    // let rndImgIdx = Math.floor(Math.random() * chins.length);
    image.setAttribute("src", `${chins[rndImgIdx].chinImg}`)
    photoContainer.appendChild(image).style.border='2px solid black'
}

function getFullImage() {
    let image2 = document.createElement("img")
        image2.setAttribute("src", `${chins[rndImgIdx].fullImg}`)
        photoContainer.replaceChild(image2, image)
    nextButton.style.backgroundcolor='black'
    submitButton.style.backgroundcolor='lightgray'
        console.log(image2)
}


function submitGuess() {
    // when button is clicked, compare player's input with chins[i].answer
    let chinAnswer = chins[rndImgIdx].answer
    inputEl = document.querySelector('input').value.toLowerCase()
    
    if(inputEl === chinAnswer) {
        score ++
        displayResult.innerHTML = 'You got it!'
        displayResult.style.color = 'purple'
        document.querySelector('.userText').value=''
        getFullImage()
    } else {
        displayResult.innerHTML = 'NOPE. Guess Again and check your spelling!'
        displayResult.style.color='red'
    }

    updateChins()
    render()
}
    
function nextImage() {
    render()
}

function updateChins() {
    chins.splice(rndImgIdx, 1)
}

