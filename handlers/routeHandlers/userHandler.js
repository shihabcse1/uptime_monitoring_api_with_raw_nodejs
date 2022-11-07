// module scaffolding
const handler = {};

handler.userHandler = (requestProperties, callback) => {
    //console.log(requestProperties);
    const acceptedMethods = ["get", "post", "put", "delete"];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
    } else {
        callback(405);
        // 405 - method not found
    }
};

module.exports = handler;
