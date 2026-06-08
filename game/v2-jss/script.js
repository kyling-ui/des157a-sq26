(function(){

    

    'use strict'
    console.log('reading js');

    // OVERLAY
    function overlayStuff() {
        document.querySelector('#overlayDarken').style.display = 'block';
        document.querySelector('#instructionsOverlay').style.display = 'flex';

        document.querySelector('#closeOverlay').addEventListener('click', function(){
        
        document.querySelector('#overlayDarken').style.display = 'none';
        document.querySelector('#instructionsOverlay').style.display = 'none';

    });

    document.addEventListener('keydown', function(e) {
        if (e.key == 'Escape') {

            document.querySelector('#overlayDarken').style.display = 'none';
            document.querySelector('#instructionsOverlay').style.display = 'none';
        }
    });

    document.querySelector('#gameInstructions').addEventListener('click', function(){
        document.querySelector('#overlayDarken').style.display = 'block';
        document.querySelector('#instructionsOverlay').style.display = 'flex';
    });
    }
    overlayStuff();



    // SOUND
    const diceSound = new Audio('sound/dice.wav')
    const winSound = new Audio('sound/victory1.mp3')

    // svgs of the dice
    const dieFaces = {
        1: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="8" fill="#E8E8E8"/><g filter="url(#filter_d1)"><rect x="20" y="20" width="8" height="8" rx="4" fill="#1C1C1C"/></g><defs><filter id="filter_d1" x="19" y="18" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="2" dy="1"/><feGaussianBlur stdDeviation="1.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_2"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_2" result="shape"/></filter></defs></svg>`,
        2: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#E8E8E8"/>
        <g filter="url(#filter0_d_38_4)">
        <rect x="12" y="20" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <g filter="url(#filter1_d_38_4)">
        <rect x="28" y="20" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <defs>
        <filter id="filter0_d_38_4" x="11" y="18" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_4"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_4" result="shape"/>
        </filter>
        <filter id="filter1_d_38_4" x="27" y="18" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_4"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_4" result="shape"/>
        </filter>
        </defs>
        </svg>
        `,

        3: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#E8E8E8"/>
        <g filter="url(#filter0_d_38_7)">
        <rect x="8" y="20" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <g filter="url(#filter1_d_38_7)">
        <rect x="20" y="20" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <g filter="url(#filter2_d_38_7)">
        <rect x="32" y="20" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <defs>
        <filter id="filter0_d_38_7" x="7" y="18" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_7"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_7" result="shape"/>
        </filter>
        <filter id="filter1_d_38_7" x="19" y="18" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_7"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_7" result="shape"/>
        </filter>
        <filter id="filter2_d_38_7" x="31" y="18" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_7"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_7" result="shape"/>
        </filter>
        </defs>
        </svg>
        `,

        4: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#E8E8E8"/>
        <g filter="url(#filter0_d_38_11)">
        <rect x="12" y="12" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <g filter="url(#filter1_d_38_11)">
        <rect x="28" y="12" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <g filter="url(#filter2_d_38_11)">
        <rect x="12" y="28" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <g filter="url(#filter3_d_38_11)">
        <rect x="28" y="28" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <defs>
        <filter id="filter0_d_38_11" x="11" y="10" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_11"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_11" result="shape"/>
        </filter>
        <filter id="filter1_d_38_11" x="27" y="10" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_11"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_11" result="shape"/>
        </filter>
        <filter id="filter2_d_38_11" x="11" y="26" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_11"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_11" result="shape"/>
        </filter>
        <filter id="filter3_d_38_11" x="27" y="26" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_11"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_11" result="shape"/>
        </filter>
        </defs>
        </svg>
        `,

        5: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#E8E8E8"/>
        <g filter="url(#filter0_d_38_19)">
        <rect x="10" y="10" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <g filter="url(#filter1_d_38_19)">
        <rect x="30" y="10" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <g filter="url(#filter2_d_38_19)">
        <rect x="20" y="20" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <g filter="url(#filter3_d_38_19)">
        <rect x="10" y="30" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <g filter="url(#filter4_d_38_19)">
        <rect x="30" y="30" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <defs>
        <filter id="filter0_d_38_19" x="9" y="8" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_19"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_19" result="shape"/>
        </filter>
        <filter id="filter1_d_38_19" x="29" y="8" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_19"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_19" result="shape"/>
        </filter>
        <filter id="filter2_d_38_19" x="19" y="18" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_19"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_19" result="shape"/>
        </filter>
        <filter id="filter3_d_38_19" x="9" y="28" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_19"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_19" result="shape"/>
        </filter>
        <filter id="filter4_d_38_19" x="29" y="28" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_19"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_19" result="shape"/>
        </filter>
        </defs>
        </svg>
        `,

        6: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#E8E8E8"/>
        <g filter="url(#filter0_d_38_38)">
        <rect x="10" y="8" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <g filter="url(#filter1_d_38_38)">
        <rect x="30" y="8" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <g filter="url(#filter2_d_38_38)">
        <rect x="10" y="20" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <g filter="url(#filter3_d_38_38)">
        <rect x="30" y="20" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <g filter="url(#filter4_d_38_38)">
        <rect x="10" y="32" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <g filter="url(#filter5_d_38_38)">
        <rect x="30" y="32" width="8" height="8" rx="4" fill="#1C1C1C"/>
        </g>
        <defs>
        <filter id="filter0_d_38_38" x="9" y="6" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_38"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_38" result="shape"/>
        </filter>
        <filter id="filter1_d_38_38" x="29" y="6" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_38"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_38" result="shape"/>
        </filter>
        <filter id="filter2_d_38_38" x="9" y="18" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_38"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_38" result="shape"/>
        </filter>
        <filter id="filter3_d_38_38" x="29" y="18" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_38"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_38" result="shape"/>
        </filter>
        <filter id="filter4_d_38_38" x="9" y="30" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_38"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_38" result="shape"/>
        </filter>
        <filter id="filter5_d_38_38" x="29" y="30" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="1"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0 0.298077 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_38"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_38" result="shape"/>
        </filter>
        </defs>
        </svg>
        `,
    };


    // set automatic win condition
    const biggerBtn = document.querySelector('#biggerBtn');
    const smallerBtn = document.querySelector('#smallerBtn');


    console.log(biggerBtn)

    // set bigger as active first
    function initialSetting() {
        biggerBtn.classList.add('settingActive');
        smallerBtn.classList.add('settingInactive');
    }
    initialSetting();

    // game setting switch
    smallerBtn.addEventListener('click', function(){
        biggerBtn.classList.remove('settingActive')
        biggerBtn.classList.add('settingInactive')

        smallerBtn.classList.add('settingActive')
        smallerBtn.classList.remove('settingInactive')
    });


    biggerBtn.addEventListener('click', function(){
        smallerBtn.classList.remove('settingActive')
        smallerBtn.classList.add('settingInactive')

        biggerBtn.classList.add('settingActive')
        biggerBtn.classList.remove('settingInactive')
    });

    // score



    // center die
    const dice = [
        document.querySelector('#dice1'),
        document.querySelector('#dice2'),
        document.querySelector('#dice3'),
        document.querySelector('#dice4'),
        document.querySelector('#dice5'),
        document.querySelector('#dice6'),
    ]

    //p1 die
    const p1dice = [
        document.querySelector('#p1die1'),
        document.querySelector('#p1die2'),
        document.querySelector('#p1die3'),
        document.querySelector('#p1die4'),
        document.querySelector('#p1die5'),
        document.querySelector('#p1die6'),
    ]

    // p2 die
    const p2dice = [
        document.querySelector('#p2die1'),
        document.querySelector('#p2die2'),
        document.querySelector('#p2die3'),
        document.querySelector('#p2die4'),
        document.querySelector('#p2die5'),
        document.querySelector('#p2die6'),
    ]

    let p1Values = [0,0,0,0,0,0]; //P1 #s for equation
    let p2Values = [0,0,0,0,0,0]; //P2 #s for equation

    // rolls die to get die + RANDOM NUM for the faces on dice
    function rollDice() {
        diceSound.currentTime = 0;
        diceSound.play();

        const rolls = [];

        for (let i=0; i < dice.length; i++) {
            dice[i].classList.remove('dieIn');
            dice[i].classList.add('dieOut');

            setTimeout(() => {
                const roll = Math.floor(Math.random() * 6) + 1;
                const face = dieFaces[roll];

                // set numbers for equation
                p1Values[i] = roll;
                p2Values[i] = roll;

                console.log(p1Values);

                dice[i].innerHTML = face;
                p1dice[i].innerHTML = face;
                p2dice[i].innerHTML = face;

                dice[i].classList.remove('dieOut');
                dice[i].classList.add('dieIn');
            }, 200 + i * 120)
        } 
    }

    let pressDice = true; // reset at end

    // RUNS ROLL DICE WHEN 'ROLL' IS CLICKED
    document.querySelector('#rollBtn').addEventListener('click', function(){

        if (pressDice == true) {
            rollDice();
            this.innerHTML = 'Locked'
            this.style.transform = 'scale(.98)'
            this.style.backgroundColor = '#FCFCFA'
            this.style.color = '#8a8a8a'

            pressDice = false;
        } 

        // enable lock in for P1
        document.querySelector('#lockIn1').disabled = false;
    });


// PLAYER 1
    // OPERATORs
    // function that will open the overlay based on the position
    function openOverlay(x, y) {
        const overlay = document.querySelector('#operatorOverlay1');
        overlay.style.display = 'block';

        const overlayHeight = document.querySelector('.overlayOptions').offsetHeight;

        const overlayGap = overlayHeight / 2 + 24  //change if want smaller
        overlay.style.left = x + 'px';
        overlay.style.top = (y - overlayGap) + 'px'
    }

    // function to close
    function closeOverlay() {
        const overlay = document.querySelector('#operatorOverlay1');
        overlay.style.display = 'none';
    }


    let currentOperatorNum = null; //track operator 
    let currentOperator = null;
    let pastOperator = [null, null, null, null, null];

    let p1Operators = ['','','','','']; // track player operators

    function changingOperators () {
         // define overlayButtons 
        const overlayOptions = document.querySelectorAll('.overlayBtn');
        const playerSelect = document.querySelectorAll('.operatorSelect');
        const overlayAll = document.querySelector('.overlayOptions');
        
        // checking operatorSelector
        for (let i=0; i<playerSelect.length; i++) {
            playerSelect[i].addEventListener('click',function(){
                currentOperatorNum = i;
                currentOperator = this;

                // get position of the operator clicked
                const rect = this.getBoundingClientRect();
                const operatorCenter = {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                }

                // to close overlay
                setTimeout(function() {
                    openOverlay(operatorCenter.x, operatorCenter.y);
                }, 0);

                // define player buttons
            });         
        }

        // check across all overlay buttons
        for (let j=0; j<overlayOptions.length; j++) {
            // check clicked
            overlayOptions[j].addEventListener('click', function(){
                console.log(this)


                const selectedSymbol = this.querySelector('p').innerHTML;
                console.log(selectedSymbol)
                console.log(currentOperator)

                // if the current operator is already an overlayBtn
                if (currentOperator.classList.contains('overlayBtn')) {

                    
                    
                    // change operator selector to selected
                    currentOperator.innerHTML = `<p class='whiteText2'>${selectedSymbol}</p>`

                    // unhide from overlay
                    console.log(pastOperator)
                    pastOperator[currentOperatorNum].classList.remove('overlayHide');

                    // grab symbol
                    p1Operators[currentOperatorNum] = `${selectedSymbol}`
                    console.log(p1Operators)

                    // remove 
                    this.classList.add('overlayHide')

                    // close after clicking
                    closeOverlay();

                    // reset operatorNum
                    currentOperatorNum = null;
                } 
                
                else {
                    // changed current operator to that symbol + tag
                    currentOperator.classList.add('overlayBtn');
                    currentOperator.innerHTML = `<p class='whiteText2'>${selectedSymbol}</p>`

                    // grab symbol for equation
                    p1Operators[currentOperatorNum] = `${selectedSymbol}`
                    console.log(p1Operators)

                    // remove selected overlayOption from overlayAll
                    this.classList.add('overlayHide');

                    // update operator
                    pastOperator[currentOperatorNum] = this;

                    // closeOverlay after tapping
                    closeOverlay();

                    // reset operatorNum
                    currentOperatorNum = null;
                }
            })
        }

        
    } 

    

    // function to reset operators
    function clearOperators() {
        const overlayOptions = document.querySelectorAll('.overlayBtn');
        const playerSelect = document.querySelectorAll('.operatorSelect');
        const overlayAll = document.querySelector('.overlayOptions');

        // reset selectors
        for (let i = 0; i< playerSelect.length; i++) {
            if (playerSelect[i].classList.contains('overlayBtn')) {
                playerSelect[i].innerHTML = '<p class="whiteText">●</p>'
                playerSelect[i].classList.remove('overlayBtn')
            }
        }

        // reset overlay
        for (let j = 0; j<overlayOptions.length;j++) {
                if (overlayOptions[j].classList.contains('overlayHide')) {
                    overlayOptions[j].classList.remove('overlayHide');
                }
        }

        
        p1Operators = ['', '', '', '', ''];
        pastOperator = [null, null, null, null, null];
        currentOperatorNum = null;
        currentOperator = null;
    }

    function clearOperators2() {
        const overlayOptions = document.querySelectorAll('.overlayBtn2');
        const playerSelect = document.querySelectorAll('.operatorSelect2');
        const overlayAll = document.querySelector('.overlayOptions2');

        // reset selectors
        for (let i = 0; i< playerSelect.length; i++) {
            if (playerSelect[i].classList.contains('overlayBtn2')) {
                playerSelect[i].innerHTML = '<p class="whiteText">●</p>'
                playerSelect[i].classList.remove('overlayBtn2')
            }
        }

        // reset overlay
        for (let j = 0; j<overlayOptions.length;j++) {
                if (overlayOptions[j].classList.contains('overlayHide')) {
                    overlayOptions[j].classList.remove('overlayHide');
                }
        }

        
        p2Operators = ['', '', '', '', ''];
        pastOperator2 = [null, null, null, null, null];
        currentOperatorNum2 = null;
        currentOperator2 = null;
    }

    function checkClose() {
        document.addEventListener('click', function(e) {
            const overlay = document.querySelector('#operatorOverlay1');
            
            // check overlay is off
            if (overlay.style.display == 'none') return;
            
            // get area of overlay + mousePosition
            const rect = overlay.getBoundingClientRect();
            const clickX = e.clientX;
            const clickY = e.clientY;
            
            // if mouse NOT in overlay
            if (clickX < rect.left || clickX > rect.right || clickY < rect.top || clickY > rect.bottom) {
                closeOverlay();
            }
        });
    }

    
    
    changingOperators();
    checkClose();

    document.querySelector('#clear1').addEventListener('click', function(){
        clearOperators();
    })

    document.querySelector('#clear2').addEventListener('click', function(){
        clearOperators2();
    })

    // PLAYER 2
    let p2Operators = ['','','','','']; // track player operators

    // OPERATORs
    // function that will open the overlay based on the position
    function openOverlay2(x, y) {
        const overlay = document.querySelector('#operatorOverlay2');
        overlay.style.display = 'block';

        const overlayHeight = document.querySelector('.overlayOptions2').offsetHeight;

        const overlayGap = overlayHeight / 2 + 16  //change if want smaller
        overlay.style.left = x + 'px';
        overlay.style.top = (y - overlayGap) + 'px'
    }

    // function to close
    function closeOverlay2() {
        const overlay = document.querySelector('#operatorOverlay2');
        overlay.style.display = 'none';
    }


    let currentOperatorNum2 = null; //track operator 
    let currentOperator2 = null;
    let pastOperator2 = [null, null, null, null, null];

    function changingOperators2 () {
         // define overlayButtons 
        const overlayOptions2 = document.querySelectorAll('.overlayBtn2');
        const playerSelect2 = document.querySelectorAll('.operatorSelect2');
        const overlayAll2 = document.querySelector('.overlayOptions2');
        
        // checking operatorSelector
        for (let i=0; i<playerSelect2.length; i++) {
            playerSelect2[i].addEventListener('click',function(){

                // lock p2 out if p1 hasn't locked
                if (!p1Locked) return;

                currentOperatorNum2 = i;
                currentOperator2 = this;

                // get position of the operator clicked
                const rect = this.getBoundingClientRect();
                const operatorCenter = {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                }

                // to close overlay
                setTimeout(function() {
                    openOverlay2(operatorCenter.x, operatorCenter.y);
                }, 0);

                // define player buttons
            });         
        }

        // check across all overlay buttons
        for (let j=0; j<overlayOptions2.length; j++) {
            // check clicked
            overlayOptions2[j].addEventListener('click', function(){
                console.log(this)


                const selectedSymbol2 = this.querySelector('p').innerHTML;
                console.log(selectedSymbol2)
                console.log(currentOperator2)

                // if the current operator is already an overlayBtn
                if (currentOperator2.classList.contains('overlayBtn2')) {

                    
                    
                    // change operator selector to selected
                    currentOperator2.innerHTML = `<p class='whiteText2'>${selectedSymbol2}</p>`

                    // unhide from overlay
                    console.log(pastOperator2)
                    pastOperator2[currentOperatorNum2].classList.remove('overlayHide');

                    // grab symbol
                    p2Operators[currentOperatorNum2] = `${selectedSymbol2}`
                    console.log(p2Operators)

                    // remove 
                    this.classList.add('overlayHide')

                    // close after clicking
                    closeOverlay2();

                    // reset operatorNum
                    currentOperatorNum2 = null;
                } 
                
                else {
                    // changed current operator to that symbol + tag
                    currentOperator2.classList.add('overlayBtn2');
                    currentOperator2.innerHTML = `<p class='whiteText2'>${selectedSymbol2}</p>`

                    // grab symbol for equation
                    p2Operators[currentOperatorNum2] = `${selectedSymbol2}`
                    console.log(p2Operators)

                    // remove selected overlayOption from overlayAll
                    this.classList.add('overlayHide');

                    // update operator
                    pastOperator2[currentOperatorNum2] = this;

                    // closeOverlay after tapping
                    closeOverlay2();

                    // reset operatorNum
                    currentOperatorNum2 = null;
                }
            })
        }
    } 

    // to close overlay on click 
    function checkClose2() {
        document.addEventListener('click', function(e) {
            const overlay = document.querySelector('#operatorOverlay2');
            
            // check overlay is off
            if (overlay.style.display == 'none') return;
            
            // get area of overlay + mousePosition
            const rect = overlay.getBoundingClientRect();
            const clickX = e.clientX;
            const clickY = e.clientY;
            
            // if mouse NOT in overlay
            if (clickX < rect.left || clickX > rect.right || clickY < rect.top || clickY > rect.bottom) {
                closeOverlay2();
            }
        });
    }
    
    changingOperators2();
    checkClose2();

    


    // EQUATION

    // equation function
    function evaluateEquation(values, operators) {
        if (operators.includes('')) {
        console.log('not all operators selected');
        return;
        }

        // create equation
        let equation = `${values[0]} ${operators[0]} ${values[1]} ${operators[1]} ${values[2]} ${operators[2]} ${values[3]} ${operators[3]} ${values[4]} ${operators[4]} ${values[5]}`;

        // calc
        let totalValue = eval(equation);
        return totalValue;

    }

    let p1ScoreTemp = null;
    let p2ScoreTemp = null;

    let winner = null; // who wins // global

    // updating scores: 
    let winCount1 = 0;
    let winCount2 = 0;

    // lock state
    let p1Locked = false;
    let p2Locked = false;

    // run on lock in
    document.querySelector('#lockIn1').addEventListener('click', function() {
        if (p2Locked) return; 

        if (p1Locked) {
            // unlock
            p1Locked = false;
            p1ScoreTemp = null;
            this.innerHTML = 'Lock In';
            document.querySelector('#lockIn2').disabled = true;

            // lock player2
            document.querySelector('#rightSide').style.opacity = '0.5';
            document.querySelector('#p2Wait').style.display = 'block';            

        } else {
            // lock in
            p1ScoreTemp = evaluateEquation(p1Values, p1Operators);
            if (p1ScoreTemp == null) return; // operators not all filled
            p1Locked = true;
            this.innerHTML = 'Unlock';
            document.querySelector('#lockIn2').disabled = false;

            // unlock player2
            document.querySelector('#rightSide').style.opacity = '1';
            document.querySelector('#p2Wait').style.display = 'none';
        }
    });

    document.querySelector('#lockIn2').addEventListener('click', function() {
        if (p2Locked) return;

        p2ScoreTemp = evaluateEquation(p2Values, p2Operators);
        if (p2ScoreTemp == null) return;

        if (p1ScoreTemp == null) {
            console.log('P1 needs to lock in first');
            return;
        }

        p2Locked = true;
        this.innerHTML = 'Unlock';
        compareScores(p1ScoreTemp, p2ScoreTemp);
    });
    
    // compare scores to see who won
    function compareScores(score1, score2) {

        //check lock
        if (score1 == null || score2 == null) {
            console.log('both players need to lock in');
            return;
        }

        // check setting
        let biggerWins = biggerBtn.classList.contains('settingActive');


        if (biggerWins) {

            if (score1 > score2) {
                winner = 'Player 1';
            } else if (score2 > score1) {
                winner = 'Player 2';
            } else {
                winner = 'Players';
            }
            
            

        } else {

            if (score1 < score2) {
                winner = 'Player 1';
            } else if (score2 < score1) {
                winner = 'Player 2';
            } else {
                winner = 'Players';
            }
        }

        if (winner == 'Player 1') {
            winCount1++;
            document.querySelector('#winCount1').innerHTML = winCount1;
        } else if (winner == 'Player 2') {
            winCount2++;
            document.querySelector('#winCount2').innerHTML = winCount2;
        }

        document.querySelector('#scoreDisplay').innerHTML = score1 + ' vs ' + score2;

        // reset scores
        p1ScoreTemp = null;
        p2ScoreTemp = null;

        // set winner
        document.querySelector('#winner').innerHTML = winner;

        // if tie
        if (winner == 'Players') {
            document.querySelector('#gameWinText').innerHTML = 'Tie!';
        } else {
            document.querySelector('#gameWinText').innerHTML = 'Wins!';
        }

        // show who wins
        winSound.currentTime = 0;
        winSound.play();
        document.querySelector('#middleSide').style.opacity = 1;

        // enable play again
        document.querySelector('#playAgainBtn').disabled = false;

        console.log(winner);
    }

    // reset memory 
    function resetRound() {
        pressDice = true;

        document.querySelector('#rollBtn').innerHTML = 'Start Game!';
        document.querySelector('#rollBtn').style.transform = '';
        document.querySelector('#rollBtn').style.backgroundColor = '';
        document.querySelector('#rollBtn').style.color = '';

        document.querySelector('#middleSide').style.opacity = 0;

        clearOperators();
        clearOperators2();

        // 
        document.querySelector('#lockIn1').disabled = true;
        document.querySelector('#lockIn2').disabled = true;
        document.querySelector('#playAgainBtn').disabled = true;

        // reset lock ins
        p1Locked = false;
        p2Locked = false;
        document.querySelector('#lockIn1').innerHTML = 'Lock In';
        document.querySelector('#lockIn2').innerHTML = 'Lock In';

        // lock p2 side
        document.querySelector('#rightSide').style.opacity = '0.5';
        document.querySelector('#p2Wait').style.display = 'block';

        // reset the wins
        document.querySelector('#gameWinText').innerHTML = 'Wins!';
        document.querySelector('#scoreDisplay').innerHTML = '';
    }

    // play again btn
    document.querySelector('#playAgainBtn').addEventListener('click', function() {
        resetRound();
    })

    
    
    

    
})();