(function(){
    
    'use strict'
    console.log('reading JS')


    // card flip // global
    function cardFlip() {
        const card = document.querySelector('.currentCard');
        card.addEventListener('click', function(){
            const cardInner = document.querySelector('.cardInner');

            // remove instruction
            document.querySelector('#photoInstruction').style.opacity = '0';
            
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
                caption: 'First stop at the station, one of the only stops that opened to the outside.',
                orientation: 'vert',
            },
            {
                number: 2,
                src: 'images/rezeArc/card2.jpg',
                caption: 'Found the stairs from the movie. Took ages to get the right photo for my girlfriend...',
                orientation: 'vert',
            },
            {
                number: 3,
                src: 'images/rezeArc/card3.jpg',
                caption: 'A cute van we saw parked nearby. Decided to snap a quick photo!',
                orientation: 'horz',
            },
            // {
            //     number: 4,
            //     src: 'images/rezeArc/card4.jpg',
            //     caption: 'Edit caption',
            //     orientation: 'horz',
            // },
            {
                number: 4,
                src: 'images/rezeArc/card5.jpg',
                caption: 'Found the phone-booth from the movie! Someone had already placed flowers that day',
                orientation: 'vert',
            },
            {
                number: 5,
                src: 'images/rezeArc/card6.jpg',
                caption: 'Our final destination, the cafe! We never went inside...',
                orientation: 'vert',
            }
        ],

        yourName: [
            {
                number: 1,
                src: 'images/yourName/card3.jpg',
                caption: "The famous stairs from 'Your Name'!! It was raining when we saw it",
                orientation: 'vert',
            },
            {
                number: 2,
                src: 'images/yourName/card2.jpg',
                caption: "The red box was a couple of frames in the movie, can't believe we were right by it! ",
                orientation: 'vert',
            },
            {
                number: 3,
                src: 'images/yourName/card1.jpg',
                caption: 'The view from the AirBnb we stayed at. The red box is super small in this photo...',
                orientation: 'vert',
            },
            
        ]
    }

    // global album variable
    let currentAlbum = 'rezeArc';

    // change album?
    let rezeButton = document.querySelector('#rezeButton');
    let nameButton = document.querySelector('#nameButton');

    rezeButton.addEventListener('click', function(){
        if (currentAlbum == 'rezeArc') return;

        currentAlbum = 'rezeArc';
        switchAlbum();

        // turn off instruction
        document.querySelector('#albumInstruction').style.opacity = '0';
    });

    nameButton.addEventListener('click', function(){
        if (currentAlbum == 'yourName') return;

        currentAlbum = 'yourName';
        switchAlbum();

        // turn off instruction
        document.querySelector('#albumInstruction').style.opacity = '0';
    });

    // left and right arrow listeners
    const rightCard = document.querySelector('#rightArrow');
    const leftCard = document.querySelector('#leftArrow');

    let photoNumTracker = 0;
    let animating = false;

    let currentCard1 = document.querySelector('.wholeCard');

    rightCard.addEventListener('click', function(){
        if (photoNumTracker >= albums[currentAlbum].length - 1) return;
        if (animating == true) return;

        animating = true;
        photoNumTracker++;

        const newCard = createNextCard(currentAlbum, 'right');
        currentCardOut(currentCard1);  
        setTimeout(function(){
            nextCardIn(newCard);
            currentCard1 = newCard;
        }, 320);

        setTimeout(function(){
            animating = false;
        }, 1000);

        // remove instruction
        document.querySelector('#arrowInstruction').style.opacity = '0';

        console.log(photoNumTracker);
    });
    leftCard.addEventListener('click', function(){
        if (photoNumTracker <= 0) return;
        if (animating == true) return;

        animating = true;
        photoNumTracker--;

        // getPreviousCard
        const newCard = createNextCard(currentAlbum, 'left');
        console.log(document.querySelector('.previousCard'));
        currentCardOutRight(currentCard1);
        setTimeout(function(){
            previousCardIn(newCard);
            currentCard1 = newCard;
        },320);

        setTimeout(function(){
            animating = false;
        }, 1000);

        // remove instruction
        document.querySelector('#arrowInstruction').style.opacity = '0';

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

        let circle = document.createElement('div');
        circle.className = 'circle';

        let photoNumber = document.createElement('h1');
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

        circle.appendChild(photoNumber);
        backSide.appendChild(circle);
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

    function switchAlbum() {
        // reset tracker
        photoNumTracker = 0;

        // remove currentcard
        currentCardOut(currentCard1);

        setTimeout(function(){
            const newCard = createNextCard(currentAlbum, 'right');
            nextCardIn(newCard);
            currentCard1 = newCard;
        }, 300)
    }

})();