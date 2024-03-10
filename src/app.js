import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
// Rutas
import productoRoutes from "./routes/productos.routes.js";
import usersRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.set('pkg', pkg);
app.use(morgan('dev'));
app.use(express.json());

app.get("/", (req, res) => {
    res.json( {
            proyecto: app.get('pkg').name,
            autor: app.get('pkg').author,
            descripcion: app.get('pkg').description,
            version : app.get('pkg').version
        }
    );
})

app.use('/productos', productoRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
export default app;
