const Trips = require("../controllers/tripsController");

module.exports = (app) => {
    app.get("/api/trips/", Trips.findAll);
    app.post("/api/trips/", Trips.create);
    app.get("/api/trips/:id", Trips.findOne);
    app.put("/api/trips/:id", Trips.update);
    app.delete("/api/trips/:id", Trips.delete);
}