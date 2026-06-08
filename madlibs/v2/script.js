(function() {

    'use strict';
    console.log('reading JS');

    const albums = {

        // reze photocards
        rezeArc: [
            {
                img: "images/rezeArc/card1.jpg",
                number: '1',
                caption: 'Waiting at a stop..',
                orientation: 'vertical',
            },
            {
                img: "images/rezeArc/card2.jpg",
                number: '2',
                caption: 'Waiting at a stop..',
                orientation: 'vertical',
            },
            {
                img: "images/rezeArc/card3.jpg",
                number: '3',
                caption: 'Waiting at a stop..',
                orientation: 'horizontal',
            },
            {
                img: "images/rezeArc/card4.jpg",
                number: '4',
                caption: 'Waiting at a stop..',
                orientation: 'horizontal',
            },
            {
                img: "images/rezeArc/card5.jpg",
                number: '5',
                caption: 'Waiting at a stop..',
                orientation: 'vertical',
            },
            {
                img: "images/rezeArc/card6.jpg",
                number: '6',
                caption: 'Waiting at a stop..',
                orientation: 'vertical',
            }
        ],

        // yourname photocards
        yourName: [
            {
                img: 'images/yourName/card1.jpg',
                number: '1',
                caption: 'Waiting at a stop',
                orientation: 'vertical',
            },
            {
                img: 'images/yourName/card2.jpg',
                number: '2',
                caption: 'Waiting at a stop',
                orientation: 'vertical',
            },
            {
                img: 'images/yourName/card3.jpg',
                number: '3',
                caption: 'Waiting at a stop',
                orientation: 'vertical',
            },
        ]
    };


    function makeCard() {
        const stage = document.querySelector('.stage');

        const wholeCard = document.createElement('div');
        wholeCard.className = 'wholeCard';

        const innerCard = document.createElement('div');
        innerCard.className = 'cardInner';

        const cardFront = document.createElement('div');
        cardFront.className = 'frontSide'

        const cardImg = document.createElement('img');
        img.src = 
    }



})();