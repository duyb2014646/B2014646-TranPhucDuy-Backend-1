const app = require("./app");
const config = require("./app/config");

//start sever
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log('Sever is running no port ${PORT}.');
});