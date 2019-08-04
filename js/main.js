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
]

/*----- app's state (variables) -----*/ 
let score, image

let rndImgIdx = Math.floor(Math.random() * chins.length);

/*----- cached element references -----*/ 
let photoContainer = document.getElementById('photo')
let scoreEl = document.getElementsByClassName('counter')
let userInput = document.querySelector('input')
let submitAnswer = document.querySelector('button').addEventListener('click', checkGuess)

/*----- event listeners -----*/ 


/*----- functions -----*/

init();

function init() {
    score = 0;
    image = document.createElement("img")
        // let rndImgIdx = Math.floor(Math.random() * chins.length);
        image.setAttribute("src", `${chins[rndImgIdx].chinImg}`)
        photoContainer.appendChild(image)
}
render();

function render() {
    


    //render image

    // render score

    //render result
}

function checkGuess() {
// when button is clicked, compare player's input with chins[i].answer
let chinAnswer = chins[rndImgIdx].answer
userInput = document.querySelector('input').value.toLowerCase()
console.log(userInput)
if(userInput === chinAnswer) {
    alert('Right!')
} else {
    alert('Guess again!')
}


//     if (playerGuess === 
}
