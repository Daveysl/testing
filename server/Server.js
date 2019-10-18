
let express = require("express");
let fileSystem = require("fs");
let cors = require("cors");

// construct application object via express
let app = express();

app.use(cors());

app.get("/portfolio", (request, response) => {
    // read json from a file
    fileSystem.readFile("./server/samples.json", (error, data) => {
        console.log("JSON LOADED");
        // convert loaded JSON string from samples.json to objects/arrays
        let sampleJSON = JSON.parse(data);
        // response set to be JSON
        response.send(sampleJSON);
    });
});

// startup the Express server - listening on port 8080
app.listen(8080, () => console.log("Listening on port 8080"));