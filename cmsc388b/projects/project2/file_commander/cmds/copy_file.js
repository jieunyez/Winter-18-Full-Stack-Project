var fs = require("fs");

module.exports = (args) => {
    if (args._[1] == undefined || args._[2] == undefined) {
        console.log("missing parameter(s). Try running the help command to see the proper format for executing the function.");
    }
    else {
        fs.copyFile(args._[1], args._[2], function (err) {
            if (err) {
                console.error(err.message);
                return
            }
        });
    }
}