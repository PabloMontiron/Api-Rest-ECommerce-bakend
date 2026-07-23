import express from "express";
import cors from "cors";
import { PORT } from "./config/port.js"

import { corsOption } from "./config/cors.js"




const app = express();



app.use(express.json()); // middleware

app.use(cors(corsOption)); // middleware

app.use((req,res,next) => {
    console.log(`Datos recibidos: metodo ${req.method} url: ${req.url}`);
    next();
})

app.use(routes); // middleware

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`); 
});

console.log(" >>> SERVIDOR INICIADO <<< ");



