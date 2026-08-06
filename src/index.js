import express from "express";
import cors from "cors";
import { PORT } from "./config/port.js"
import { corsOption } from "./config/cors.js"

// routes
import productRoutes from "./routes/product.route.js";
import skuRoutes from "./routes/sku.route.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from"./routes/auth.route.js";
import bodyParser from "body-parser";
//

const app = express();

app.use(express.json()); // middleware
//
app.use(cors(corsOption)); // 
//
app.use((req,res,next) => { // middleware observador
    console.log('-------------------');
    console.log(` * PETICIONES, metodo => ${req.method} url => http://localhost${req.url}`);
    console.log('-------------------');
    next();
})
//
app.use("/api/products", productRoutes); // middleware
app.use("/api/skus", skuRoutes); //middle
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
//
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`); 
    console.log('');

    console.log(" >>> SERVIDOR INICIADO <<< ");
});

// NO OLVIDAR EL MIDDLEWARE FINAL PARA MANEJAR ERRORES 404 //



