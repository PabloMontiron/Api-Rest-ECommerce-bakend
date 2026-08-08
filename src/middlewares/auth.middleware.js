import jwt from "jsonwebtoken";
import "dotenv/config"; // porque uso .env

// tomo la llave secreta de mi varible de entorno .env 
const secretKey = process.env.JWT_KEY;

// aca next es necesario. Si todo está OK hace next() y continua el flujo normal de ejecución
export const authentication = (req, res, next) => {
    
    // 1. busco el token en el header
    const authHeader = req.headers.authorization;

    // 2. si no hay header, o no empieza con "Bearer" , se bloquea la peticion (401)
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({error: "Acceso denegado. Token requerido"});
    };

    // 3 . si el punto anterior esta OK, se extre el token puro. (se corta el string con .split(" ")[1] y se toma la posicion [1] que a la que le queda el token puro 
    const token = authHeader.split(" ")[1];
    
    // 4. intenta try catch
    try {
        const decodedPayload = jwt.verify(token, secretKey); // es el token del bearer 

        // 4. guardo los datos del usuario dentro de la peticion
        req.user = decodedPayload;

        // 5. si todo salio ok, sigue el flujo " next() "
        next();

    } catch (error) {
        // si no coincide el token o expiro el tiempo, cae aca (403) se debe vovler a iniciar secion
        return res.status(403).json({ error: "Token inválido o expirado"});
    }
};