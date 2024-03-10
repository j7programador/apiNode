
import Producto from "../models/Producto";

//funcion que nos permite crear un producto
export const crearProducto = async (req, res) => {
    const{nombre, cantidad, precio, imgURL} = req.body;

    //creamos un nuevo producto
    const producto = new Producto({nombre, cantidad, precio, imgURL});
    const productoGuardado = await producto.save();

    //Se devuelve el producto guardado
    res.status(200).json(productoGuardado);

}

//funcion que nos permite obtener productos
export const getProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
}

//funcion que nos permite obtener un producto
export const getProductoById = async (req, res) => {
    const producto = await Producto.findById(req.params.productoId);
    res.status(200).json(producto);
}

//funcion que nos permite eliminar un producto
export const eliminarProducto = async (req, res) => {
  const { productoId } = req.params;

  await Producto.findByIdAndDelete(productoId);

  // code 200 esta ok
  res.status(204).json();
}

//funcion que nos permite actualizar un producto
export const actualizarProducto = async (req, res) => {
    const updatedProduct = await Producto.findByIdAndUpdate(
        req.params.productoId,
        req.body,
        {
          new: true,
        }
      );
      res.status(204).json(updatedProduct);
}