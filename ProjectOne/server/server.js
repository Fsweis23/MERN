const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const DB = "pirates"

app.use(cors(), express.json(), express.urlencoded({extended:true}));

require("./config/mongooseConfig")(DB)

require("./routes/pirateRoute")(app)

app.listen(port, () => console.log(`>> server up on ${port} <<`) );