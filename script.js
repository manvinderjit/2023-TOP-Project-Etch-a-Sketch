const divContainer = document.querySelector('#container');

function createDivGrid (gridSize = 256){
    for(let i=1; i<= gridSize; i++){
        const divSquare = document.createElement('div');
        divSquare.setAttribute("id", i);
        divSquare.classList.add('divSquare', 'divSquareRegular');
        divContainer.appendChild(divSquare);
    }
}

createDivGrid();

const divSquaresAll = document.querySelectorAll('.divSquare');

divSquaresAll.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        e.target.classList.remove('divSquareRegular');
        e.target.classList.add('divSquareHovered');
    })
});
