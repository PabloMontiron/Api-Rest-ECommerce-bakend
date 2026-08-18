import * as cartService from "../services/cart.service.js";

// 1. addProductToCart (POST)
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
    };
};

// 2. getCart (GET)
export const getCart = async (req,res) => {

    try {
        // 1. miro el ID que el middleware extrajo del token
        // por lo tanto NO USO req.params.id (eso expondria el id en la url)
        const userId = req.user.id;

        const cart = await cartService.getCart(userId);

        res.status(200).json(cart);

    } catch (error) {
        console.error("ERROR: ",error);
        res.status(500).json({message: error.message});
    };
};

// 3. updateQuantity (PATCH)
export const updateQuantity = async (req,res) => {

    try {
        // extraigo user de forma segura con su midleware
        const userId = req.user.id;

        const { skuId } = req.params; // si lo ve el user en la URL "/update/123" en routes hare "/:skuId" (respetar el camelCase) 


        const updateItemProduct = await cartService.updateQuantity(userId,skuId,quantity);
    
        res.status(200).json(updateItemProduct);

    } catch (error) {
        console.error("ERROR CON EL CONTROLADOR: ",error);

        res.status(400).json({message: error.message});
    }
};

// 4. deleteItem (DELETE)
export const deleteItem = async (req,res) => {
    try {
        // extraigo id usario desde el middleware
        const userId = req.user.id;
        const skuId = req.params.skuId;

        const deleteCartItem = await cartService.deleteItem(userId,skuId);

        res.status(200).json(deleteCartItem);

    } catch (error) {
        console.error("ERROR EN EL CONTROLADOR: ",error);

        res.status(400).json({message: error.message});
    }
};

// 5. deleteAllItems (DELETE)
export const deleteAllItems = async (req,res) => {
    try {
        const userId = req.user.id;

        const deletedItems = await cartService.deleteAllItems(userId);

        res.status(200).json(deletedItems);

    } catch (error) {
        console.error("ERROR EN EL CONTROLADOR: ",error);

        res.status(400).json({message: error.message});
    }
}
