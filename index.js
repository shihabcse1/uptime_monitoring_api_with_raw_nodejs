// dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environments");
const data = require("./lib/data");
const { sendTwilioSms } = require("./helpers/notifications");

// app object - module scaffolding
const app = {};

// for checking whether sms part is working or not

// sendTwilioSms("", "Hello world hi there", (err) => {
//     console.log(`The error is : `, err);
// });

// data.create(
//     "test",
//     "newFile",
//     { name: "Bangladesh", language: "Bangla" },
//     (err) => {
//         console.log(`error was`, err);
//     }
// );

// data.read("test", "newFile", (err, data) => {
//     console.log(err, data);
// });

// data.update(
//     "test",
//     "newFile",
//     { name: "England", language: "English" },
//     (err) => {
//         console.log(err);
//     }
// );

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`environment variable is : ${process.env.NODE_ENV}`);
        console.log(`listening to port ${app.config.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
