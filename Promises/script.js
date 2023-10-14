document.addEventListener('DOMContentLoaded', function() {

    let clickButton = document.querySelector('#click');
    let displayText = document.querySelector('#displaytext');

    function simulateAsynchronousOperation(event) {

        clickButton.style.backgroundColor='grey';

        // Display loading text
        displayText.textContent = 'Loading ...';

        // Step A - Create a Promise
        function getOrderStatus(orderId) {
            // Step A.1 - Create a promise using the Promise constructor.
            return new Promise((resolve, reject) => {
                //  Step A.2 - Inside the promise, perform an asynchronous operation.
                // Simulate an asynchronous operation (fetch order status)
                /*
                setTimeout(() => {
                    resolve("Data received successfully");
                    displayText.textContent = `Promise resolved after 3 seconds`;
                }, 3000);
                */
               setTimeout( () => {
                    let randomNumber = Math.random();
                    let status = randomNumber <0.5 ? `Promise resolved after 5 seconds` : 'Operation timed out';
                    console.log(status);
                    if ( status === `Promise resolved after 5 seconds` ) {
                        resolve({ message: `Order ${orderId}: ${status}`, randomNumber: randomNumber });
                        displayText.textContent = `Promise resolved after 5 seconds`;
                    } else {
                        reject({ message: `Order ${orderId}: ${status}`, randomNumber: randomNumber });
                        displayText.textContent = `Operation timed out`;
                    }
               }, 5000);
            });

            
        }

        // Step B - Handle the Promise (without explicit error handling)
        getOrderStatus(123) // 123 is a random orderID
            .then(data => {
                // Step B.1 - Handle resolved data
                // console.log(data);
                console.log('Status Message:', data.message);
                console.log('Random Number:', data.randomNumber);
                clickButton.style.backgroundColor='blue';
            })
            .catch( error => {
                // Step B.2 Handle errors
                // console.error(error);
                console.error('Error Message:', error.message);
                console.log('Random Number:', error.randomNumber);
                clickButton.style.backgroundColor='blue';
            });

            

    }

    clickButton.addEventListener('click', simulateAsynchronousOperation);

});

/*
// Step A - Create a Promise
function getOrderStatus(orderId) {
    // Step A.1 - Create a promise using the Promise constructor.
    return new Promise((resolve, reject) => {
        //  Step A.2 - Inside the promise, perform an asynchronous operation.
        // Simulate an asynchronous operation (fetch order status)
        setTimeout(() => {
            let status = Math.random() < 0.8 ? 'Delivered' : 'Problem with delivery';
            if (status === 'Delivered') {
                // Step A.3 - If the operation is successful, call resolve(data)
                resolve(`Order ${orderId}: ${status}`);
            } else {
                // Step A.4 - If there's an error, call reject(error)
                reject(`Order ${orderId}: ${status}`);
            }
        }, 2000);
    });
}

// Step B - Handle the Promise (without explicit error handling)
getOrderStatus(123)
    .then(data => {
        // Step B.1 - Handle resolved data
        console.log(data);
    });
*/
