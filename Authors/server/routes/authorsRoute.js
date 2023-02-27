const Authors = require("../controllers/authorsController");

module.exports = (app) => {
    app.get("/api/authors/", Authors.findAll);
    app.post("/api/authors/", Authors.create);
    app.get("/api/authors/:id", Authors.findOne);
    app.put("/api/authors/:id", Authors.update);
    app.delete("/api/authors/:id", Authors.delete);
}