import { Prisma } from "@prisma/client";
import prisma from "../config/db.js";

// 1. addProductToCart
export const addProductToCart = async (userId,skuId,quantity) => {

    // CAPA 1. USER - ¿ existe ese usuario ? -> busco en BD
    try {

        const user = await prisma.user.findUnique({
            where: { id: userId }
        });
        
        if (!user) { // si no existe el usuario lanza un error y corta el flujo. 
            throw new Error("No existe un usario con esa id");
        };
        
        // CAPA 2. CART - ¿ tiene el usuario un carrito activo ?
        let userCart = await prisma.cart.findUnique({ 
            where: { userId: userId } // que ESE usario con ESA ID este en el campo de Cart .userId
        });

        if (!userCart) { 
            userCart = await prisma.cart.create({
                data: { userId: userId }  
            })
        };

        // --- Ya esta la ID del carrito seguro en: userCart.id --- " userCart trabaja sobre Cart"
        // CAPA 3. CART ITEM 
        const existItem = await prisma.cartItem.findFirst({
            where: { cartId: userCart.id, skuId: skuId } //  userCart.id es el uuid, skuId lo mismo
        });

        let finalItem; // verlo como una var aux

        if (existItem) {
            finalItem = await prisma.cartItem.update({
                where: { id: existItem.id },
                data: { quantity: existItem.quantity + quantity }
            });

        } else {
            finalItem = await prisma.cartItem.create({
                data: {
                    cartId: userCart.id, // aca hace en UUID (del item) + cartId (uuid -> id del cart)
                    skuId: skuId,
                    quantity: quantity
                }
            });
        }
        return finalItem;
    
    } catch (error) {
        console.error("ERROR EN EL SERVICE: ",error);

        throw new Error(error.message || "Error, no se pudo agregar el producto al carro de compras");
    }; 
};

// 2. getCart
export const getCart = async (userId) => {
    try {
        const userCart = await prisma.cart.findUnique({
            where: { userId: userId },
            include: {
                items: { 
                    include: {
                        sku: true
                    }
                }
            }
        });
        // valido que exista
        if (!userCart) {
            return null;
        }
        return userCart;

    } catch (error) {
        console.error("ERROR EN EL SERVICE: ",error);

        throw new Error(error.message || "Error al obtener el carro de compras.");
    };
};

// 3. updateQuantity
export const updateQuantity = async (userId,skuId,quantity) => {

    try {

        // 1. Buscar el carrito de ESTE usuario
        const userCart = await prisma.cart.findUnique({
            where: {userId: userId}
        });

        // 2. Verificar si exite o no un carrito asociado if(!userCart) => userCart viene del modelo Cart
        if (!userCart) {
            throw new Error("El usuario no tiene un carro de compras activo");
        };

        // 3. Buscar el item, pero SOLO dentro del carrito de ESTE usuario
        const existItem = await prisma.cartItem.findFirst({
            where: { cartId: userCart.id,
                     skuId: skuId
             }
        });

        if (!existItem) {
            throw new Error("Este producto no se encuentra en el carro de compras");
        };

        const updateItem = await prisma.cartItem.update({
            where: { id: existItem.id },
            data: {
                quantity: quantity
            }
        });
        return updateItem;

    } catch (error) {
        console.error("ERROR: ",error);

        throw new Error(error.message || "Error al actualizar el producto");
    };
};       

// 4. deleteItem
export const deleteItem = async (userId,skuId) => {

    try {
        const userCart = await prisma.cart.findUnique({ 
            where: { userId: userId } // voy al campo userId y busco match con userId
        });

        if (!userCart) {
            throw new Error("El usuario no tiene un carro de compras activo");
        };

        const existItem = await prisma.cartItem.findFirst({
            where: { cartId: userCart.id,
                     skuId: skuId
            }
        });

        if (!existItem) {
            throw new Error("Este producto no se encuentra en el carro de compras");
        };

        const deleteItemProduct = await prisma.cartItem.delete({
            where: { id: existItem.id },
            
        })

        return deleteItemProduct; 

    } catch (error) {
        console.error("ERROR: ",error);

        throw new Error(error.message || "Error al eliminar el producto");
    };
};

// 5. deleteAllItems
export const deleteAllItems = async (userId) => {
    try {
        
        // 1. verificar si existe un carrito para ese id de usuario
        const userCart = await prisma.cart.findUnique({
            where: { userId: userId }
        });

        if (!userCart) {
            throw new Error("El usuario no tiene un carro de compras activo");
        };

        // deleteMany devuelve un objeto informando cuántos registros borró, ej: { count: 3 }
        const deleteItems = await prisma.cartItem.deleteMany({
            where: { cartId: userCart.id }
        });

        return deleteItems;

    } catch (error) {
        console.error("ERROR: ",error);

        throw new Error(error.message || "No se pudieron eliminar los productos del carro de compras");
    };
};

// ---- //