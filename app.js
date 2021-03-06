const cardsCollection = document.getElementsByClassName('card');

let cards = [];

for (let i =0; i < cardsCollection.length; i++) {
    cards.push (cardsCollection.item(i));
}

let movingCard = null;
let posXbeg = 0;
let posYbeg = 0;
let posXend = 0;
let posYend = 0;

let moveCard = e => {
    posXbeg = e.clientX + e.offsetX;
    posYbeg = e.clientY + e.offsetY;

    console.log(e.target);
    console.log(`Variables: (${posXbeg}, ${posYbeg})`);
    console.log(`Offset   : (${e.offsetX}, ${e.offsetY})`);
    console.log(`Client   : (${e.clientX}, ${e.clientY})`);
    console.log(`Element  : (${this.style.left}, ${this.style.top})`);
}

cards.forEach(card => {
    card.addEventListener('mousedown', e => {
        card.classList.add('held');
        movingCard = e.target;
        e.target.addEventListener('mousemove', moveCard); 
    });
    card.addEventListener('mouseup', e => {
        card.classList.remove('held');
        movingCard = null; 
        e.target.removeEventListener('mousemove', moveCard);
    });
});