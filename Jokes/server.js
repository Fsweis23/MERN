const express = require("express");
const app = express();

require("./Server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokeRoutes = require("./Server/routes/jokes.routes");
AllMyJokeRoutes(app);

app.listen(8000, () => console.log("The server is up and running on port 8000"));