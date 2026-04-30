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
    const submitButton = document.querySelector(`#submitButton`);

    let container2 = document.querySelector(`#container2`);
    let madLibsContainer2 = document.querySelector(`#madLibsContainer2`);

    // FORM VARIABLES
    const name1Value = document.querySelector(`#name1`)

    const noun1of2Value = document.querySelectorAll(`.userNoun1`)[0];
    const noun2of2Value = document.querySelectorAll(`.userNoun1`)[1];

    const adj1Value = document.querySelector(`#userAdj1`);
    const noun2Value = document.querySelector(`#userNoun2`);
    
    const verb1of2Value = document.querySelectorAll(`.userVerb1`)[0];
    const verb2of2Value = document.querySelectorAll(`.userVerb1`)[1];

    const animal1Value = document.querySelector(`#userAnimal1`);
    const verb2Value = document.querySelector(`#userVerb2`);
    const adj2Value = document.querySelector(`#userAdj2`);
    const noun3Value = document.querySelector(`#userNoun3`);
    const noun4Value = document.querySelector(`#userNoun4`);
    const adj3Value = document.querySelector(`#userAdj3`);
    const adj4Value = document.querySelector(`#userAdj4`);
    const verb3Value = document.querySelector(`#userVerb3`);




  
    nextButton.addEventListener(`click`, function(event) {

        let classCheck = container2.className
        
        if (classCheck == `formDown`) {

            let checkNoun1 = document.querySelector(`#noun1`).value;
            let checkNoun2 = document.querySelector(`#noun2`).value;
            let checkAdj1 = document.querySelector(`#adjective1`).value;
            let checkVerb1 = document.querySelector(`#verb1`).value;
            let checkName = document.querySelector(`#name`).value;

            if (checkNoun1 && checkNoun2 && checkAdj1 && checkVerb1 && checkName) {
                document.querySelector(`#form2`).classList.remove(`hidden`);

                container2.classList.remove(`formDown`)
                container2.classList.add(`formDown1`);

                document.querySelector(`#circle2`).style.backgroundColor = `#FF7733`
                document.querySelector(`#line1`).style.backgroundColor = `#FF7733`
            } else { }
            // ADD ALERT
            

        } else if (classCheck == `formDown1`) {

            let checkAnimal = document.querySelector(`#animal1`).value;
            let checkVerb2 = document.querySelector(`#verb2`).value;
            let checkAdj2 = document.querySelector(`#adjective2`).value;
            let checkNoun3 = document.querySelector(`#noun3`).value;
            let checkNoun4 = document.querySelector(`#noun4`).value;
            
            if (checkAnimal && checkVerb2 && checkAdj2 && checkNoun3 && checkNoun4) {
                document.querySelector(`#form3`).classList.remove(`hidden`);
                
                container2.classList.remove(`formDown1`);
                container2.classList.add(`formDown2`);

                document.querySelector(`#circle3`).style.backgroundColor = `#FF7733`
                document.querySelector(`#line2`).style.backgroundColor = `#FF7733`

                nextButton.classList.add(`hidden`);
                submitButton.classList.remove(`hidden`);
                
            } else {}
            
        
        // } else if (classCheck == `formDown2`) {
        //     let container = document.querySelector(`#container`);

        } else {}

    })

    backButton.addEventListener(`click`, function(){
        let classCheck = container2.className
        
        if (classCheck == `formDown`) {
            let container = document.querySelector(`#container`);
            container.style.transform = `translateX(0px)`

        } else if (classCheck == `formDown1`) {
            container2.classList.remove(`formDown1`)
            container2.classList.add(`formDown`);

            document.querySelector(`#circle2`).style.backgroundColor = `#494746`
            document.querySelector(`#line1`).style.backgroundColor = `#494746`

        } else if (classCheck == `formDown2`) {
            container2.classList.remove(`formDown2`)
            container2.classList.add(`formDown1`);

            document.querySelector(`#circle3`).style.backgroundColor = `#494746`
            document.querySelector(`#line2`).style.backgroundColor = `#494746`
        }
    });

    submitButton.addEventListener(`click`, function(){

        let checkAdj3 = document.querySelector(`#adjective3`).value;
        let checkAdj4 = document.querySelector(`#adjective4`).value;
        let checkVerb3 = document.querySelector(`#verb3`).value;

        if (checkAdj3 && checkAdj4 && checkVerb3) {
            document.querySelector(`#section3`).classList.remove(`hidden`);

            noun1of2Value.innerHTML = document.querySelector(`#noun1`).value;
            noun2of2Value.innerHTML = document.querySelector(`#noun1`).value
            noun2Value.innerHTML = document.querySelector(`#noun2`).value;
            noun3Value.innerHTML = document.querySelector(`#noun3`).value;
            noun4Value.innerHTML = document.querySelector(`#noun4`).value;
            verb1of2Value.innerHTML = document.querySelector(`#verb1`).value;
            verb2of2Value.innerHTML = document.querySelector(`#verb1`).value;
            verb2Value.innerHTML = document.querySelector(`#verb2`).value;
            verb3Value.innerHTML = document.querySelector(`#verb3`).value;
            animal1Value.innerHTML = document.querySelector(`#animal1`).value;
            name1Value.innerHTML = document.querySelector(`#name`).value;
            adj1Value.innerHTML = document.querySelector(`#adjective1`).value;
            adj2Value.innerHTML = document.querySelector(`#adjective2`).value;
            adj3Value.innerHTML = document.querySelector(`#adjective3`).value;
            adj4Value.innerHTML = document.querySelector(`#adjective4`).value;

            madLibsContainer2.classList.add(`scroll`);
    
            let container = document.querySelector(`#container`);
            container.style.transform = `translateX(-2400px)`;

        } else {}


        
    })


    // SECTION 3 -> 1
    const startAgain = document.querySelector(`#startAgain`);
    startAgain.addEventListener(`click`, function(){
        let container = document.querySelector(`#container`);
        container.style.transform = `translateX(0)`;

        submitButton.classList.add(`hidden`);
        nextButton.classList.remove(`hidden`);

        container2.classList.remove(`formDown2`);
        container2.classList.add(`formDown`);

        document.querySelector(`#noun1`).value = '';
        document.querySelector(`#noun2`).value = '';
        document.querySelector(`#noun3`).value = '';
        document.querySelector(`#noun4`).value = '';
        document.querySelector(`#verb1`).value = '';
        document.querySelector(`#verb2`).value = '';
        document.querySelector(`#verb3`).value = '';
        document.querySelector(`#animal1`).value = '';
        document.querySelector(`#name`).value = '';
        document.querySelector(`#adjective1`).value = '';
        document.querySelector(`#adjective2`).value = '';
        document.querySelector(`#adjective3`).value = '';
        document.querySelector(`#adjective4`).value = '';


        document.querySelector(`#circle3`).style.backgroundColor = `#494746`
        document.querySelector(`#line2`).style.backgroundColor = `#494746`
        document.querySelector(`#circle2`).style.backgroundColor = `#494746`
        document.querySelector(`#line1`).style.backgroundColor = `#494746`

        madLibsContainer2.classList.remove(`scroll`);
        madLibsContainer2.scrollTop = 0;

        document.querySelector(`#section3`).classList.add(`hidden`)
        document.querySelector(`#form2`).classList.add(`hidden`)
        document.querySelector(`#form3`).classList.add(`hidden`)
        
    })
})();