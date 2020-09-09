var fs = require("fs");

module.exports = (args) => {
    if (args._[1] == undefined) {
        console.log("missing parameter(s). Try running the help command to see the proper format for executing the function.");
    }
    else {
        fs.readFile(args._[1], function (err, data) {
            if (err) {
                console.error(err.message);
                return
            }
            console.log(data.toString());

        });
    }

}