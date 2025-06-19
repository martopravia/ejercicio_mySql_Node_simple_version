const express = require("express");
const userRoutes = require("./userRoutes");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/usuarios", userRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Listening @ http://localhost:${PORT}/usuarios`);
});
