    (function(){

        'use strict' 
        console.log('reading js');

        //
        const viewingContainer = document.querySelector('#viewingContainer');
        const photoContainer = document.querySelector('#photoContainer')
        const img = viewingContainer.querySelector('img');
        

        // BEGINNING INSTRUCTIONS
        function instructions() {
            const instructions = document.querySelectorAll('.instructions');
            let current = 0;

            document.addEventListener('click', function() {
                if (current < instructions.length) {
                    instructions[current].classList.remove('visible');
                    instructions[current].classList.add('exiting');

                    current++;

                    if (current < instructions.length) {
                        instructions[current].classList.remove('exiting');
                        instructions[current].classList.add('visible');
                    }
                }   
            })
        }
        
        instructions();

        // DRAG FIX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        let isDragging = false;
        let startX = 0;
        let translateX = 0;
        let currentTranslate = 0;

        viewingContainer.addEventListener('mousedown', function(e) {
            isDragging = true;
            startX = e.clientX - currentTranslate;
        });

        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            translateX = e.clientX - startX;
            const maxDrag = -(photoContainer.offsetWidth - viewingContainer.offsetWidth);
            translateX = Math.max(maxDrag, Math.min(0, translateX));
            photoContainer.style.transform = `translateX(${translateX}px)`;
        });

        document.addEventListener('mouseup', function() {
            if (!isDragging) return;
            isDragging = false;
            currentTranslate = translateX;
        });

        // BRIGHTNESS
        function brightnessScrollControll() {
            let brightness = 1;
            const fill = document.querySelector('#brightnessFill');
            const hint = document.querySelector('#brightnessHint');

            let unlocked = false
            const overlay = document.querySelector('#lockedOverlay');

            const targetMin = 0.3;
            const targetMax = 0.5;

            let firstLock = false;
            let secondLock = false;
            let thirdLock = false;

            window.addEventListener('wheel', function(scrollAmt) {
                // stop scroll
                scrollAmt.preventDefault();

                // get scrollAmt value into brightness
                brightness += scrollAmt.deltaY * -0.001
                // console.log(scrollAmt.deltaY)
                // console.log(brightness)

                // restrict
                if (brightness >= 2) {
                    brightness = 2;
                }

                if (brightness <= 0) {
                    brightness = 0;
                }

                // filter
                img.style.filter = `brightness(${brightness})`;

                const percent = (brightness / 2) * 100;
                fill.style.width = percent + '%';
                document.querySelector('#brightnessLabel').innerHTML = 'Brightness: ' + Math.round(percent) + '%';

                if (brightness >= targetMin && brightness <= targetMax) {
                    hint.classList.add('visible');
                    document.querySelector('#brightnessFill').style.backgroundColor = '#279AF1';

                    if (!unlocked) {
                        unlocked = true;
                        overlay.classList.add('unlocked');
            }
                } else {
                    hint.classList.remove('visible');
                    document.querySelector('#brightnessFill').style.backgroundColor = '#564D52';
                }

            });
        }

        brightnessScrollControll();
        

})();
