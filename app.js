const cardsCollection = document.getElementsByClassName('card');
let cards = [];
let posXbeg = 0;
let posYbeg = 0;
let posXend = 0;
let posYend = 0;

for (let i =0; i < cardsCollection.length; i++) {
    cards.push(cardsCollection.item(i));
}

cards.forEach(card => {
    card.addEventListener('mousedown', e => {
        window.setTimeout(card.classList.add('held'), 500); 
    });
    
    card.addEventListener('mouseup', e => {
        window.setTimeout(card.classList.remove('held'), 500);
    });

    window.addEventListener('mousemove', e => {
        posXbeg = e.screenX;
        posYbeg = e.screenY;
        
        // Set initial position so card does not jump on first drag
        card.setAttribute('style', `
            top: ${+(card.offsetTop)}px;
            left: ${+(card.offsetLeft)}px;
        `);

        vectorX = posXbeg - posXend;
        vectorY = posYbeg - posYend;

        console.log(`(${vectorX}, ${vectorY})`);

        if (card.classList.contains('held')) {
            e.preventDefault();
            card.setAttribute('style', `
                top: ${+(card.style.top.replace('px', '')) + vectorY}px;
                left: ${+(card.style.left.replace('px', '')) + vectorX}px;
            `);
        } 

        posXend = posXbeg;
        posYend = posYbeg;
    });
});