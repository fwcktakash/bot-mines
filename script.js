document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const generateSignalButton = document.getElementById('generateSignal');
    const boardSize = 5;
    const numStars = 4;
  
    function createBoard() {
      board.innerHTML = '';
      for (let i = 0; i < boardSize * boardSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.appendChild(cell);
      }
    }
  
    function generateSignal() {
      const cells = Array.from(document.querySelectorAll('.cell'));
      cells.forEach(cell => {
        cell.classList.remove('star');
        cell.innerText = '';
      });
      
      let starPositions = new Set();
  
      while (starPositions.size < numStars) {
        const randomPosition = Math.floor(Math.random() * (boardSize * boardSize));
        starPositions.add(randomPosition);
      }
  
      starPositions.forEach(position => {
        cells[position].classList.add('star');
        cells[position].innerText = '★';
      });
    }
  
    generateSignalButton.addEventListener('click', generateSignal);
  
    createBoard();
  });