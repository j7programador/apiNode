import {Router} from 'express';
import * as productoController from '../controllers/productos.controller';
import { verifyToken, isModerator, isAdmin } from "../middlewares/authJwt.js";

const router = Router();



router.get('/', productoController.getProductos);
router.post('/', [verifyToken, isModerator], productoController.crearProducto);
router.get('/:productoId', productoController.getProductoById);
router.put('/:productoId', [verifyToken, isModerator],  productoController.actualizarProducto);
router.delete('/:productoId', [verifyToken, isAdmin] ,productoController.eliminarProducto);

export default router;