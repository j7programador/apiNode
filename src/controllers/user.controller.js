import User from "../models/User.js";
import Role from "../models/Role.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // se crea un nuevo usuario
    const user = new User({
      username,
      email,
      password,
      roles: rolesFound.map((role) => role._id),
    });

    //encripta la contrasenia
    user.password = await User.encryptPassword(user.password);

    // guarda el nuevo usuario
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      roles: savedUser.roles,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  return res.json(users);
};

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.userId);
  return res.json(user);
};