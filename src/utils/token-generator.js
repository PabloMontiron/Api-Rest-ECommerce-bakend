import jwt from "jsonwebtoken";
import "dotenv/config"; // para mayor seguridad. igual es index.js la hace global.

// se tomae el secret_key de la variable de entorno .env
const secretKey = process.env.JWT_KEY;

export const generateToken = (user) => {
    // payload (qué es mas a detalle) - es un objeto literal
    const payload = { id: user.id, role: user.role };

    return jwt.sign(payload, secretKey, { expiresIn: "1h"}); // firma (jwt.sign) // payload(contenido en json, elementos) // secretkey auth // tiempo de expiracion sesion
};