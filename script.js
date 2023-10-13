document.addEventListener('DOMContentLoaded', function() {
    // Your code here...
    let displayText = document.querySelector('.displaytext-box h1');
    let clickButton = document.querySelector('#clickbutton-box');
    let resetButton = document.querySelector('#resetbutton-box');
    let originalText = displayText.textContent;

    let timeInput = document.getElementById('timeinput');
    // let duration = timeInput.value;

    function myCallback() {
        // get the time from the input field
        let time = timeInput.value * 1000; // convert to milliseconds

        setTimeout( () => {
            
            // let textToChange = document.querySelector('.DisplayText h1');
            // textToChange.textContent = "Hello world!";
            // displayText.textContent = "Callback executed after 2 seconds";
            displayText.textContent = `This message will be logged after ${timeInput.value} seconds`;
            console.log(`This message will be logged after ${timeInput.value} seconds`);
        }, time);
    }

    function higherOrder(myCallback) {
        // 1. Select the element
        // let element = document.querySelector('.ButtonBox');
        // let textToChange = document.querySelector('.DisplayText').textContent;
        // let textToChange = document.querySelector('.DisplayText');
        // let textToChange = document.querySelector('.DisplayText h1');

        // 2. Define the event handler
        function eventHandler(event) {
            // Handle the event
            console.log('Event triggered');
            // textToChange = "Callback executed after 2 seconds";
            // textToChange.textContent = "Hello world!";

            this.style.backgroundColor='grey';

            // Call the callback function
            myCallback();

        }

        // 3. Add the event listener
        clickButton.addEventListener('click', eventHandler);

        
    };

    higherOrder(myCallback);


    // Event handler for reset
    function resetEventHandler(event) {
        console.log('Reset event triggered');
        displayText.textContent = originalText;
        timeInput.value='';
        clickButton.style.backgroundColor='blue';
    }

    resetButton.addEventListener('click', resetEventHandler);


});



    // CALLBACK syntax
    //start

    // // step 1 - define a callback function
    // function myCallback() {
    //     // code
    // }

    // // step 2 - define a higher-order fn that accepts a callback
    // function higherOrder(myCallback) {
    //     // code

    //     // call the callback fn
    //     myCallback();
    // }

    // // step 3 - call the higher-order fn with the callback
    // higherOrder(myCallback);

    // // you can modify callback fn and higher-order fn as per needs
    // // end


