process.stdin.setEncoding("utf8");

let timeInMilliseconds = 2000;

var timer = setInterval(function(name) {
	console.log(`Fear the ${name}`);
}, timeInMilliseconds, "turtle");

console.log("Type stop to stop the timer");
process.stdin.on('readable', function() {
	let dataInput = process.stdin.read();
	if (dataInput !== null) {
		let command = dataInput.trim();
		if (command === "stop") {
			console.log("timer stopped");
            clearInterval(timer);
        } else {
			console.log(`Invalid command: ${command}`);
		}
    }
});
