const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/db-hack-academy");

mongoose.connection
  .once("open", () =>
    console.log("¡Conexión con la base de datos establecida!")
  )
  .on("error", (error) => console.log(error));

module.exports = { mongoose, Schema };
