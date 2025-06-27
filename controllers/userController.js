const { findByIdAndUpdate } = require("../models/User");
const User = require("../models/User");

const userController = {
  index: async (req, res) => {
    const users = await User.find();
    console.log("viendo usuarios");
    return res.render("index", { users });
  },
  create: async (req, res) => {
    console.log("Entré a la vista de crear");
    return res.render("addNewUserForm", { user: {} });
  },
  store: async (req, res) => {
    try {
      const { firstname, lastname, age } = req.body;
      console.log(req.body);
      await User.create({ firstname, lastname, age });
      return res.redirect("/usuarios");
    } catch (error) {
      console.error("No se pudo agregar al usuario: ", error);
      return res.status(500).send("Error del servidor al guardar usuario");
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      console.log(user);
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
      await User.findByIdAndUpdate(id, { firstname, lastname, age });
      return res.redirect("/usuarios");
    } catch (error) {
      console.error("No se pudo editar contacto: ", error);
      return res.status(500).send("Error del servidor al modificar usuario");
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);
      console.log(`Eliminado el id ${id}`);
      return res.redirect("/usuarios");
    } catch (error) {
      console.error("No se pudo borrar contacto: ", error);
      return res.status(500).send("Error del servidor al borrar usuario");
    }
  },
};

module.exports = userController;
