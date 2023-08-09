const divContainer = document.querySelector('#container');

function removePreviousChildNodes() {
    if(!divContainer.hasChildNodes) return;
    let lastChildNode = divContainer.lastElementChild;
    while(lastChildNode){
        divContainer.removeChild(lastChildNode);
        lastChildNode = divContainer.lastElementChild;
    }
}

function addHoverEffect() {
    const divSquaresAll = document.querySelectorAll('.divSquare');

    divSquaresAll.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.classList.remove('divSquareRegular');
            e.target.classList.add('divSquareHovered');
        })
    });
}

function createDivGrid (gridSize = 16){
    if(divContainer.hasChildNodes){
        removePreviousChildNodes();
    }

    for(let i=1; i<= Math.pow(gridSize, 2); i++){
        const divSquare = document.createElement('div');
        divSquare.setAttribute("id", i);
        divSquare.classList.add('divSquare', 'divSquareRegular');
        divSquare.style.width = `${100/gridSize}%`;        
        divContainer.appendChild(divSquare);
    }

    addHoverEffect();
}

function getNewGridSize () {
    const newGridSize = prompt("Enter the number of square per side! Value between 1 and 100");    
    console.log(newGridSize);
    if(newGridSize === null){
        return newGridSize;
    }
    while(parseInt(newGridSize) < 1 || parseInt(newGridSize) > 100){
        getNewGridSize();
    }
    return newGridSize;
}

const buttonCustomizeGrid = document.querySelector('#customize-grid');

buttonCustomizeGrid.addEventListener('click', () => {

    const newGridSize = getNewGridSize();
    
    createDivGrid(
        newGridSize !== null ? newGridSize : 16
    );
});


createDivGrid();