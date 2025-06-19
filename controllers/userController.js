const dbQuery = require("../dbQuery");
const userController = {
  index: async (req, res) => {
    try {
      const users = await dbQuery("SELECT * FROM users", []);
      return res.render("index", { users });
      console.log(users);
    } catch (error) {
      console.error("Se produjo un error: ", error);
      return res.status(500).send("Error al obtener usuarios");
    }
  },
  create: async (req, res) => {
    return res.render("addNewUserForm");
  },
  store: async (req, res) => {
    try {
      const { firstname, lastname, age } = req.body;
      await dbQuery(
        "INSERT INTO users (firstname, lastname, age) VALUES(?,?,?)",
        [firstname, lastname, age]
      );

      return res.redirect("/usuarios");
    } catch (error) {
      console.error("No se pudo agregar al usuario: ", error);
      return res.status(500).send("Error del servidor al guardar usuario");
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const users = await dbQuery("SELECT * FROM users WHERE id = ?", [id]);
      const user = users[0];
      return res.render("editUserForm", { user });
    } catch (error) {
      console.error("No se pudo traer contacto: ", error);
      return res.status(500).send("Error del servidor al traer usuario");
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstname, lastname, age } = req.body;
      await dbQuery(
        "UPDATE users SET firstname = ?, lastname = ?, age = ? WHERE id = ?",
        [firstname, lastname, age, id]
      );
      return res.redirect("/usuarios");
    } catch (error) {
      console.error("No se pudo editar contacto: ", error);
      return res.status(500).send("Error del servidor al modificar usuario");
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      await dbQuery("DELETE FROM users WHERE id = ?", [id]);
      return res.redirect("/usuarios");
    } catch (error) {
      console.error("No se pudo borrar contacto: ", error);
      return res.status(500).send("Error del servidor al borrar usuario");
    }
  },
};

module.exports = userController;
