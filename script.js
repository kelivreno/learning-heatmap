const container = document.getElementById('heatmap')

for (let i=0 ; i<365; i++) {
    const square = document.createElement('div');
    square.classList.add('square')
    container.appendChild(square);
}