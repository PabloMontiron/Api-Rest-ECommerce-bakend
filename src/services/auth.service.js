import prisma from "../config/db.js";
import bcrypt from  "bcrypt";
import { generateToken } from "../utils/token-generator.js";

export const login = async (email, password) => {
    // buscar usuario por email (campo @unique en schema.prisma)
    const user = await prisma.user.findUnique({
        where: {email: email}
    });

    // 1. si no existe, se corta ejecucion lanzando un error
    if (!user) {
        throw new Error("Credenciales inválidas");
    };
    // 2. se compara password con en texto plano (cliente) con el hash guardado
    const isPasswordValid = await bcrypt.compare(password, user.password); // retorna un boolean

    if (!isPasswordValid) {
        throw new Error("Credenciales inválidas");
    };
    // si todo es correcto se genera el TOKEN usando generateToken (herramienta propoia)
    const token = generateToken(user);

    return {
        user: {
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            role: user.role 
        },
        token
    };
};
