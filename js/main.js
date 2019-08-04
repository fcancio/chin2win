/*----- constants -----*/ 
// const chins = ['imgs/TomHanks_chin.png', 
//     'imgs/MichaelKeaton_chin.png'
// ]


const chins = [
    {
        chinImg: 'imgs/TomHanks_chin.png',
        fullImg: 'imgs/TomHanks.jpg',
        answer: 'tom hanks'
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
        chinImg: 'imgs/AmyPoehler_chin.png',
        fullImg: 'imgs/AmyPoehler.jpg',
        answer: 'amy poehler'
    },
]

/*----- app's state (variables) -----*/ 
let score, image
let rndImgIdx = Math.floor(Math.random() * chins.length);


/*----- cached element references -----*/ 
let photoContainer = document.getElementById('photo')
let scoreEl = document.querySelector('.counter')
let userInput = document.querySelector('.userText')
let submitAnswer = document.querySelector('button').addEventListener('click', checkGuess)

/*----- event listeners -----*/ 


/*----- functions -----*/

init();

function init() {
    score = 0;
    getImage();
}
render();


function getImage () {
    image = document.createElement("img")
    // let rndImgIdx = Math.floor(Math.random() * chins.length);
    image.setAttribute("src", `${chins[rndImgIdx].chinImg}`)
    photoContainer.appendChild(image)
}

function render() {
    photoContainer.removeChild(image)
    getImage();
    //render image
    // image = document.createElement("img")
        // let rndImgIdx = Math.floor(Math.random() * chins.length);
    // image.setAttribute("src", `${chins[rndImgIdx].chinImg}`)
    // photoContainer.getAttribute(image)

    // render score
    scoreEl.innerHTML = score

    //empty text input
    document.querySelector('.userText').value=''

    //if there are no more chins, alert user of final score
}


function checkGuess() {
    // when button is clicked, compare player's input with chins[i].answer
    let chinAnswer = chins[rndImgIdx].answer
    userInput = document.querySelector('input').value.toLowerCase()
    console.log(userInput)
    if(userInput === chinAnswer) {
        window.alert('Right!')
        score ++;
        updateChins()
        console.log(score)
    } else {
        window.alert('Guess again!')
    }
    
    //call render
    render();

    }
    

function updateChins() {
    chins.splice(rndImgIdx, 1)
}

