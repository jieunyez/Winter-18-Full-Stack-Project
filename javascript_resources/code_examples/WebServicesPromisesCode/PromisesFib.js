
function fibonacci(n) {
	if (n === 0) {
        return 0;
    } else if (n === 1) {
		return 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
};

function Calculator() { };

Calculator.prototype.computeFibonacciAsync = function(value, callback) {
   if (typeof value !== 'number') {
	  /* Notice we callback is used without second argument */
      return callback(new Error('number argument missing'));
   }

   /* nextTick makes processing asynchronous */
   process.nextTick(function() {
         let result = fibonacci(value); /* computation */
         callback(null, result);  /* using callback to report answer */
   });
}

let calculator = new Calculator();
let value = 40;
    
const promise = new Promise((resolve, reject) => {
    calculator.computeFibonacciAsync(value, function(err, result) {
        if (err) {
            reject(err);
        } else {
            resolve(result);
        }
    });     
});

function ifSuccessful(answer) {
    console.log(`fibonacci value is ${answer}`);
}

function ifItFails(err) {
    console.error(err);
}

promise.then(ifSuccessful, ifItFails);
console.log("Computation scheduled");

            