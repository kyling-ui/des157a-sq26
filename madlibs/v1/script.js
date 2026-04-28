(function(){
    'use strict';
    console.log('Script JS');   
    

    // SECTION 1 -> SECTION 2
    const startMission = document.querySelector(`#startButton`);
    startMission.addEventListener(`click`, function(){
        let container = document.querySelector(`#container`);
        container.style.transform = `translateX(-1200px)`
    })

    // FORM SECTION 1 -> SECTION 2
    const nextButton = document.querySelector(`#formNextButton`);
    const backButton = document.querySelector(`#formBackButton`);
    let container2 = document.querySelector(`#container2`);
  
    nextButton.addEventListener(`click`, function() {
        let classCheck = container2.className
        
        if (classCheck == `formDown`) {
            container2.classList.remove(`formDown`)
            container2.classList.add(`formDown1`);

        } else if (classCheck == `formDown1`) {
            container2.classList.remove(`formDown1`);
            container2.classList.add(`formDown2`);
        
        } else if (classCheck == `formDown2`) {

        } else{}
    })

    backButton.addEventListener(`click`, function(){
        let classCheck = container2.className
        
        if (classCheck == `formDown1`) {
            container2.classList.remove(`formDown1`)
            container2.classList.add(`formDown`);

        } else if (classCheck == `formDown2`) {
            container2.classList.remove(`formDown2`)
            container2.classList.add(`formDown1`);
        }
    })
    

})();