const express = require("express");
const helmet = require("helmet");

const knex = require("knex");
const knexfile = require("../knexfile");

const db = knex(knexfile.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "api running" });
});

server.get("/api/cars", (req, res) => {
  db("car-dealer")
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "unable to retrieve cars data" });
    });
});

server.post("/api/cars", (req, res) => {
  const newCar = req.body;
  db("car-dealer")
    .insert(newCar)
    .then((id) => res.status(200).json({ message: id }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "unable to post" });
    });
});

module.exports = server;
