const Pirate = require("../controllers/pirateController");

module.exports = (app) => {
    app.get("/api/pirates/", Pirate.findAll);
    app.post("/api/pirates/", Pirate.create);
    app.get("/api/pirates/:id", Pirate.findOne);
    app.delete("/api/pirates/:id", Pirate.delete);
}