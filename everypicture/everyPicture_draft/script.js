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



})();
