import mongoose from "mongoose";

//Se definen los atributos de modelo producto
const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    cantidad: {
        type: Number,
        required: true,
        trim: true,
    },
    precio: {
        type: Number,
        default: 0,
    },
    imgURL: String
    
}, {
    timestamps : true,
    versionKey : false,
})

export default mongoose.model('Producto', productoSchema);