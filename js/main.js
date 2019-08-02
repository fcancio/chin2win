/*----- constants -----*/ 
const chins = {
    tomHanks: 'imgs/TomHanks_chin.png',
    michaelKeaton:'imgs/MichaelKeaton_chin.png'
}

// const chinLookup = {
//     tomHanks: {
//         chinImg: 'imgs/TomHanks_chin.png',
//         fullImg: 'imgs/TomHanks.jpg'
//     },
//     michaelKeaton: {
//         chinImg: 'imgs/MichaelKeaton_chin.png',
//         fullImg: 'imgs/MichaelKeaton.jpg'
//     }
// }

/*----- app's state (variables) -----*/ 
let score, image

/*----- cached element references -----*/ 

/*----- event listeners -----*/ 

/*----- functions -----*/
init();

function init() {
    image = Object.keys(chins);
    score = 0;
    console.log(image)
}
render();

function render() {
    //render score

    //render result
}

