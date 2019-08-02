/*----- constants -----*/ 
const chinLookup = {
    th: {
        chinImg: 'imgs/TomHanks.jpg',
        fullImg: 'imgs/TomHanks.jpg'
    }
}
/*----- app's state (variables) -----*/ 
let score, image

/*----- cached element references -----*/ 
const scoreEl = document.getElementById()

/*----- event listeners -----*/ 
document.querySelector('main button')
    .addEventListener('click', checkAnswer)

/*----- functions -----*/
init();

function init() {
    score = 0;
    image = 'imgs/TomHanks.jpg'
}
render();
