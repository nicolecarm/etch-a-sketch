const wrapper = document.querySelector('#wrapper');


const container = document.querySelector('.gridContainer');

//


function createGrid(x) {
  var x = prompt();

  $('.gridContainer').css('grid-template-columns', 'repeat('+x+', 1fr)');

  for (var rows = 0; rows < x; rows++) {

    for (var column = 0; column < x; column++){

        var gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        container.appendChild(gridSquare);

      }

    }

  }
createGrid();
