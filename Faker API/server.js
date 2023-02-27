const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const PORT = 8000;

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));

class User {
    constructor(){
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.number = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

console.log(new User);

class Company {
    constructor(){
        this.id = faker.datatype.uuid();
        this.name = faker.company.name();
        this.address = {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
        }
    }
}

console.log(new Company)

app.get("/api/users/new", (req, res) => {
let user = new User();
res.json({ results: user });
});

app.get("/api/companies/new", (req, res) => {
let company = new Company();
res.json({ results: company });
});

app.get("/api/user/company", (req, res) => {
    res.json([new User(), new Company()]);
});