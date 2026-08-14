import * as cartService from "../services/cart.service.js";

// agrega un item
export const addProductToCart = async (req,res) => {

    try {
        // uso el middleware. previamente desencripta y valida JWT.
        const userId = req.user.id;
        
        // uso desestructuracion para extraer de una vez el skuId y quantity
        const { skuId,quantity } = req.body;

        // paso los 3 parametros necesarios para la funcion
        const newItem = await cartService.addProductToCart(userId,skuId,quantity);
        
        // respondo al cliente
        res.status(201).json(newItem);

    } catch(error) {
        console.error("ERROR EN EL CONTROLADOR: ",error);

        // mejor practica => en vez de hacer otro mensaje extraigo el mensaje que vino del service a través de THROW NEW ERROR
        res.status(500).json({message: error.message});
    }
};

export const getCart = async (req,res) => {

    try {
        // 1. miro el ID que el middleware extrajo del token
        // por lo tanto NO USO req.params.id (eso expondria el id en la url)
        const userId = req.user.id;

        const cart = await cartService.getCart(userId);

        res.status(200).json(cart);

    } catch (error) {
        console.error("ERROR: ",error);
        res.status(500).json({message: "Error al obtener el carro de compras"});
    };
};