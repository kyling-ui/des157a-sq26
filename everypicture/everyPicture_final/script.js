(function(){
    
    'use strict'
    console.log('reading JS')


    // card flip // global
    function cardFlip() {
        const card = document.querySelector('.currentCard');
        card.addEventListener('click', function(){
            const cardInner = document.querySelector('.cardInner');

            // add flipped
            
            // if it has flipped alr, remove
            if (cardInner.classList.contains('flipped')) {
                cardInner.classList.remove('flipped');
            } else { 
                cardInner.classList.add('flipped');
            }
        });
    }   
    cardFlip();

    // card date
    const albums = {
        rezeArc: [
            {
                number: 1,
                src: 'images/rezeArc/card1.jpg',
                caption: 'Edit caption',
                orientation: 'vert',
            },
            {
                number: 2,
                src: 'images/rezeArc/card2.jpg',
                caption: 'Edit caption',
                orientation: 'vert',
            },
            {
                number: 3,
                src: 'images/rezeArc/card3.jpg',
                caption: 'Edit caption',
                orientation: 'horz',
            },
            {
                number: 4,
                src: 'images/rezeArc/card4.jpg',
                caption: 'Edit caption',
                orientation: 'horz',
            },
            {
                number: 5,
                src: 'images/rezeArc/card5.jpg',
                caption: 'Edit caption',
                orientation: 'vert',
            },
            {
                number: 6,
                src: 'images/rezeArc/card6.jpg',
                caption: 'Edit caption',
                orientation: 'vert',
            }
        ],
    }


    // left and right arrow listeners
    const rightCard = document.querySelector('#rightArrow');
    const leftCard = document.querySelector('#leftArrow');

    let photoNumTracker = 0;
    let animating = false;

    let currentCard1 = document.querySelector('.wholeCard');

    rightCard.addEventListener('click', function(){
        if (photoNumTracker >= albums.rezeArc.length - 1) return;
        if (animating == true) return;

        animating = true;
        photoNumTracker++;

        const newCard = createNextCard('rezeArc', 'right');
        currentCardOut(currentCard1);  
        setTimeout(function(){
            nextCardIn(newCard);
            currentCard1 = newCard;
        }, 320);

        setTimeout(function(){
            animating = false;
        }, 1000);

        console.log(photoNumTracker);
    });
    leftCard.addEventListener('click', function(){
        if (photoNumTracker <= 0) return;
        if (animating == true) return;

        animating = true;
        photoNumTracker--;

        // getPreviousCard
        const newCard = createNextCard('rezeArc', 'left');
        console.log(document.querySelector('.previousCard'));
        currentCardOutRight(currentCard1);
        setTimeout(function(){
            previousCardIn(newCard);
            currentCard1 = newCard;
        },320);

        setTimeout(function(){
            animating = false;
        }, 1000);

        console.log(photoNumTracker);
        
    })



// FUNCTIONS

// CARD IN AND OUT

    // create card (that does not show with positioning before animation)
    function createNextCard(album, direction) {
        const cardContainer = document.querySelector('#cardContainer')
        const data = albums[album][photoNumTracker];

        let wholeCard = document.createElement('div');
        if (direction == 'right') {
            wholeCard.className = 'wholeCard nextCard';
        } else {
            wholeCard.className = 'wholeCard previousCard';
        }
        
        let cardInner = document.createElement('div');
        cardInner.className = 'cardInner';

        // new front side
        let frontSide = document.createElement('div');
        frontSide.className = 'frontSide';

        let img = document.createElement('img');
        img.src = data.src;
        img.alt = 'card' + photoNumTracker;

        // new back side
        let backSide = document.createElement('div');
        backSide.className = 'backSide';

        let photoNumber = document.createElement('h2');
        photoNumber.className = 'photoNumber';
        photoNumber.textContent = data.number;

        let captionText = document.createElement('p');
        captionText.className = 'captionText';
        captionText.textContent = data.caption

        if (data.orientation == 'horz') {
            frontSide.style.width = '400px'; // change for size
            frontSide.style.height = 'fit-content';
            img.style.width = '100%';
            img.style.height = 'auto';
        }

        backSide.appendChild(photoNumber);
        backSide.appendChild(captionText);
        frontSide.appendChild(img);
        cardInner.appendChild(frontSide);
        cardInner.appendChild(backSide);
        wholeCard.appendChild(cardInner);
        cardContainer.appendChild(wholeCard);
        return wholeCard;
        
    }
    
    // move currentCard out
    function currentCardOut(wholeCard) {
        const currentCard = wholeCard.querySelector('.cardInner');
        wholeCard.classList.add('moveOut')

        // remove currentCard tag // add delay
        setTimeout(function(){
            wholeCard.remove();
        }, 1000);
    }

    // move nextCard in
    function nextCardIn(wholeCard) {
        setTimeout(function(){
            wholeCard.classList.add('moveIn');
        }, 20);
        

        // remove next card + add delay
        setTimeout(function(){
            var cardInner = wholeCard.querySelector('.cardInner');
            cardInner.classList.add('currentCard');
            wholeCard.classList.remove('moveIn');
            wholeCard.classList.remove('nextCard');

            // attach flip
            wholeCard.addEventListener('click', function(){
                if (cardInner.classList.contains('flipped')) {
                    cardInner.classList.remove('flipped');
                } else {
                    cardInner.classList.add('flipped');
                }
            });
        }, 1000);
    }

    // move currentCard right
    function currentCardOutRight(wholeCard) {
        wholeCard.classList.add('moveOutRight');

        setTimeout(function(){
            wholeCard.remove();
        }, 1000);
    }

    function previousCardIn(wholeCard) {
        setTimeout(function(){
            wholeCard.classList.add('moveIn');
        }, 20);

        setTimeout(function(){
            const cardInner = wholeCard.querySelector('.cardInner');
            cardInner.classList.add('currentCard');
            wholeCard.classList.remove('moveIn');
            wholeCard.classList.remove('previousCard');

            wholeCard.addEventListener('click', function(){
                if (cardInner.classList.contains('flipped')) {
                    cardInner.classList.remove('flipped');
                } else {
                    cardInner.classList.add('flipped');
                }
            });
        }, 1000);
}

})();