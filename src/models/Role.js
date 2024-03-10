import mongoose from "mongoose";

//Se definen los roles
export const ROLES = ["user", "admin", "moderator"];

//se define la estructura de dato para role
const roleSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Role", roleSchema);