const container = document.querySelector('#container');
const sizeBtn = document.querySelector('#sizeBtn');
createBoxes(16);

function createBoxes (num) {
    container.replaceChildren();
    const boxSize = 100/num;
    for (let i = 1; i <= (num*num); i++) {

        const box = document.createElement('div');
        box.classList.toggle('gridBox');
        box.style.height = `${boxSize}%`;
        box.style.width = `${boxSize}%`;
        container.appendChild(box);
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "dodgerblue";
        })
    }
}

sizeBtn.addEventListener('click', () => {
    const value = prompt("Enter the square dimension of the box (max: 100): ");
    (value > 100) ? alert("ERROR: Size too large.") : createBoxes(value);
})