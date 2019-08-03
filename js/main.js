/*----- constants -----*/ 
const chins = ['imgs/TomHanks_chin.png', 
    'imgs/MichaelKeaton_chin.png'
]


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
let photoContainer = document.getElementById('photo')

/*----- event listeners -----*/ 


/*----- functions -----*/
init();

function init() {
    let rndImgIdx = Math.floor(Math.random() * chins.length);
    console.log(rndImgIdx)
    return chins[rndImgIdx];

    score = 0;
    console.log(image)
}
render();

function render() {
    let rndImgIdx = Math.floor(Math.random() * chins.length);

    //render random image
    let elImage = document.createElement("img")
    elImage.setAttribute("src", `${chins[rndImgIdx]}`)
    photoContainer.appendChild(elImage)

    //render score

    //render result
}

