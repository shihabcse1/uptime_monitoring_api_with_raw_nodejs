/*
 * Title: Workers library
 * Description: Worker related files. This will basically gather all the checks data, it will * see the link is down or not and if down then send and sms using twilio
 *
 */
// dependencies
const data = require("./data");

// worker object - module scaffolding
const worker = {};

// lookup all the checks
worker.gatherAllChecks = () => {
    // get all the checks
    data.list("checks", (err1, checks) => {
        if (!err1 && checks && checks.length > 0) {
            checks.forEach((check) => {
                // read the checkData
                data.read("checks", check, (err2, originalCheckData) => {
                    if (!err2 && originalCheckData) {
                        // pass the data to the check validator
                        //worker.validateCheckData(parseJSON(originalCheckData));
                    } else {
                        console.log("Error: reading one of the checks data!");
                    }
                });
            });
        } else {
            console.log("Error: could not find any checks to process!");
        }
    });
};

// timer to execute the worker process once per minute
worker.loop = () => {
    setInterval(() => {
        worker.gatherAllChecks();
    }, 1000 * 60);
};

// start the workers
worker.init = () => {
    // execute all the checks
    worker.gatherAllChecks();

    // call the loop so that checks continue
    worker.loop();
};

// export
module.exports = worker;