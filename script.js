const startButton = document.querySelector('.start-button');
const background = document.querySelector('.background');
const pandaOptionContainer = document.querySelector('.option-container');

let level = 1;
let gameList = [];
let playerList = [];
let randomPanda;

startButton.addEventListener('click', startGame);

function startGame() {
    pandaOption();
    updatePandaImage();
}

function pandaOption() {
    for (let i = 1; i < 6; i++) {
        const pandaImage = document.createElement('img');
        pandaImage.src = `images/panda_dance_${i}.png`;
        pandaImage.classList.add('panda-option');
        pandaOptionContainer.appendChild(pandaImage);
    }

    const pandaOptions = document.querySelectorAll('.panda-option');
    pandaOptions.forEach(option => {
        option.addEventListener('click', handlePandaOptionSelection);
        playerList.append(option);
        option.style.cursor = 'pointer';
    });
}

function updatePandaImage() {
    background.style.backgroundImage = "url('images/open_stage.png')";
    startButton.style.display = 'none';
    
    const randomPanda = Math.floor(Math.random() * 5) + 1;
    const pandaImage = document.createElement('img');
    pandaImage.src = `images/panda_dance_${randomPanda}.png`;
    gameList.append(randomPanda);
    pandaImage.classList.add('panda-dance');
    
    background.appendChild(pandaImage);
}

function handlePandaOptionSelection(e) {
}
