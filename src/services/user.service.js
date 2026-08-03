import { error } from "node:console";
import prisma from "../config/db.js";

// ---- USER ---- //

// 1. POST
export const createUser = async(dataUser) => {
    try {
        const newUser = await prisma.user.create({
            data: dataUser
        });
    return newUser;

    } catch (error) {
        console.error("ERROR: ",error);

        throw new Error("Error al intentar crear un nuevo usuario");
    }
};

// 2. GET
export const getUserById = async (id) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: id }
        });
        return user;

    } catch (error) {
        console.error("ERROR: ",error);

        throw new Error("Error al intentar recuperar los datos del usuario");
    }
};

// 3. GET
export const getAllUser = async() => {
    try {
        const users = await prisma.user.findMany();
        return users;

    } catch (error) {
        console.error("ERROR: ",error);

        throw new Error("Error al intentar obtener la lista de usuarios");
    }
};

// 4. PATCH
export const updateUserById = async (id,newData) => {
    try {
        const updateUser = await prisma.user.update({
            where: { id: id },
            data: newData // cuales son los atributos propio de prisma para acceder y modificar por ejemplo en este caso los datos de un user con el atr. data: ____
        });
        return updateUser;

    } catch (error) {
        console.error("ERROR: ",error);

        throw new Error("Error al intentar actualizar los datos del usuario");
    }
};

// 5. GET
export const getUserOrdersById = async (id) => { // FALTA AUN ORDERS!! 
    try {
        const orders = await prisma.order.findMany({
            where: { userId: id }
        });
        return orders;

    } catch (error) {
        console.error("ERROR: ",error);

        throw new Error("Error al intentar obtener ordenes del usuario");
    }
};

// 6. GET
export const getInactiveUsers = async () => {
    try {
        const inactiveUsers = await prisma.user.findMany({
            where: { isActive: false }
        });
        return inactiveUsers;

    } catch (error) {
        console.error("ERROR: ",error);

        throw new Error("Error al intentar obtener los usuarios inactivos");
    }
};

// 7. PATCH
export const softDeleteUserById = async (id) => {
    try {
        const softDeleteUser = await prisma.user.update({
            where: { id: id },
            data:  { isActive: false }
        });
        return softDeleteUser;

    } catch (error) {
        console.error("ERROR: ",error);

        throw new Error("Error al intentar ocultar usuario (soft delete)");
    }
};

// ---- //