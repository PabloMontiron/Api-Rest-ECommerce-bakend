import prisma from "../config/db";

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
                data: { userId: userId } // pregunta: etnonces crea automaticamente el UUDI Y ADEMAS añade al campo userId el valor userID que se paso como parametro, no?
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

        throw new Error("Error, no se pudo agregar el producto al carro de compras");
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

        if (!cartUser) {
            return null;
        }
        return userCart;

    } catch (error) {
        console.error("ERROR: ",error);

        throw new Error("Error al obtener el carro de compras.")
    }
};

// 3. updateCart




// ---- //