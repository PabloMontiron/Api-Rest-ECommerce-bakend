import express from "express";
import cors from "cors";
import { PORT } from "./config/port.js"
import { corsOption } from "./config/cors.js"

// routes
import productRoutes from "./routes/product.route.js";
import skuRoute from "./routes/sku.route.js";

const app = express();

app.use(express.json()); // middleware

app.use(cors(corsOption)); // middleware

app.use((req,res,next) => { // middleware ( usa use() por lo tanto es middle)
    console.log('-------------------');
    console.log(` * PETICIONES, metodo => ${req.method} url => http://localhost${req.url}`);
    console.log('-------------------');
    next();
})


app.use("/api", productRoutes); // middleware
app.use("/api", skuRoute); //middle

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`); 
    console.log('');

    console.log(" >>> SERVIDOR INICIADO <<< ");
});

// NO OLVIDAR EL MIDDLEWARE FINAL PARA MANEJAR ERRORES 404 //



