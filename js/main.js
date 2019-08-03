/*----- constants -----*/ 
// const chins = ['imgs/TomHanks_chin.png', 
//     'imgs/MichaelKeaton_chin.png'
// ]


const chins = [
    {
        chinImg: 'imgs/TomHanks_chin.png',
        fullImg: 'imgs/TomHanks.jpg',
        answer: 'Tom Hanks'
    },
    {
        chinImg: 'imgs/MichaelKeaton_chin.png',
        fullImg: 'imgs/MichaelKeaton.jpg',
        answer: 'Michael Keaton'
    },
]

/*----- app's state (variables) -----*/ 
let score, image

/*----- cached element references -----*/ 
let photoContainer = document.getElementById('photo')
let scoreEl = document.getElementsByClassName('counter')
let playerGuess = document.querySelector('input')

/*----- event listeners -----*/ 


/*----- functions -----*/
console.log(chins[0].chinImg)
console.log(chins[0].fullImg)
console.log(chins[0].answer)
console.log(chins[1].chinImg)
console.log(chins[1].fullImg)
console.log(chins[1].answer)

init();

function init() {
    score = 0;
    image = document.createElement("img")
    image.setAttribute("src", `${chins[0].chinImg}`)
    photoContainer.appendChild(image)
}
render();

function render() {
    
    // let rndImgIdx = Math.floor(Math.random() * chins.length);

    //render image

    // render score

    //render result
}

function checkGuess() {
//     if (playerGuess === 
}
