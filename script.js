const divContainer = document.querySelector('#container');

function createDivGrid (gridSize = 256){
    for(let i=1; i<= gridSize; i++){
        const divSquare = document.createElement('div');
        divSquare.setAttribute("id", i);
        divSquare.classList.add('divSquare');
        divContainer.appendChild(divSquare);
    }
}

createDivGrid();