import { PORT } from "./port.js"

export const corsOpcion = {

    origin: (origin, callback) => {
        if (!origin || origin === `http://localhost:${PORT}`) { // si no tiene origen, o, el origen es esrtrictamente el fefinido se concede acceso
            callback(null,true); // permite acceso
        } else {
            callback(new Error("No permitido por CORS"));
        }
    },
    methods: ["GET","POST","PUT","DELETE"], // metodos permitidos
    allowedHeaders: ['Contetent-Type', 'Authorization'],
    credentials: true
};