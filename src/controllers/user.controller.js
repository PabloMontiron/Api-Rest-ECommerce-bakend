// importo todas las funciones de userService con el alias userService

import * as userService from "../services/user.service.js";

// ---- //

// 1. POST => createUser
export const createUser = async (req,res) => {
    try {
        const dataUser = req.body;
        const newUser= await userService.createUser(dataUser);

        res.status(201).json(newUser);
        console.log("Usuario creado exitosamente")

    } catch (error) {
        console.error("ERROR: ",error);

        res.status(500).json({error: "Ocurrio un error al intentar crear un usuario"});
    }
};

// 2. GET => getUserById
export const getUserById = async (req,res) => {
    try {
        const id = req.params.id;
        const user = await userService.getUserById(id);

        res.status(200).json(user);
        console.log("Se encontro al usuario con exito");

    } catch (error) {
        console.log("ERROR: ",error);

        res.status(500).json({error: "Error al intentar obtener usuario"});
    }
};

// 3. GET => getAllUsers
export const getAllUsers = async (req,res) => {
    try {
        const users = await userService.getAllUsers();

        res.status(200).json(users);
        console.log("Se puedo acceder a la lista de usuarios exitosamente");

    } catch (error) {
        console.error("ERROR: ",error);

        res.status(500).json({error: "Error al intentar obtener usuarios"});
    }
};

// 4. PATCH => updateUserById
export const updateUserById = async (req,res) => {
    try {
        const id = req.params.id;
        const newData = req.body;

        const updateUser = await userService.updateUserById(id,newData);
        res.status(200).json(updateUser); 
        console.log("Datos del usuario ctualizado correctamente");

    } catch (error) {
        console.error("ERROR: ",error);

        res.status(500).json({error: "Error al actualizar el usuario"});
    }
};

// 5. GET => getUserOrdersById
export const getUserOrdersById = async (req,res) => {
    try {
        const id = req.params.id;
        const ordes = await userService.getUserOrdersById(id);

        res.status(200).json(orders);
        console.log("Lista de ordenes, acceso exitoso");

    } catch (error) {
        console.error("ERROR: ",error);

        res.status(500).json({error: "Error al obtener lista de ordenes del usuario"});
    }
};

//6. GET getInactiveUsers
export const getInactiveUsers = async (req,res) => {
    try {
        const inactiveUsers = await userService.getInactiveUsers();

        res.status(200).json(inactiveUsers);
        console.log("Se puedo realizar el listado de usuarios inactivos");

    } catch (error) {
        console.error("ERROR: ",error);

        res.status(500).json({error: "Error al obtener lista de usarios inactivos"});
    }
};

// 7. PATHC softDeleteUserById
export const softDeleteUserById = async (req,res) => {
    try {
        const id = req.parms.id;
        const userHidden = await userService.softDeleteUserById(id);

        res.status(200).json(userHidden);
        console.log("Usuario ocultado exitosamente");

    } catch (error) {
        console.error("ERROR: ",error);

        res.status(500).json({error: "Error al ocultar el usurio"});
    }
}