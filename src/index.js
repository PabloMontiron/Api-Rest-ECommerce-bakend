import express from "express";
import cors from "cors";
import { PORT } from "./config/port.js"
import { corsOption } from "./config/cors.js"

import productRoutes from "./routes/product.route.js";

const app = express();

app.use(express.json()); // middleware

app.use(cors(corsOption)); // middleware



app.use((req,res,next) => { // middleware ( usa use() por lo tanto es middle)
    console.log(`Datos recibidos: metodo ${req.method} url: ${req.url}`);
    next();
})



app.use("/api", productRoutes); // middleware

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`); 


    console.log(" >>> SERVIDOR INICIADO <<< ");
});

// NO OLVIDAR EL MIDDLEWARE FINAL PARA MANEJAR ERRORES 404 //



