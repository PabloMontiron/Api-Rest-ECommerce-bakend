import prisma from "../config/db";

// ---- //
export const addProductToCart = async (userId,skuId,quantity) => {

    try {
        const user = await prisma.user.findUnique({
            where: {id: userId}
        });

        if (!user) {
            throw new Error("No se encuenta un usuario con esa id");
        };

        // se busca si ya tiene un carrito activo. como (en caso de ser null) se modificara se usa LET
        let userCart = await prisma.cart.findUnique({
            where: { userId: userId }
        }) 
        
        if (!userCart) {
            const newCart = await prisma.cart.create();
        };

        const o let ... userCart = newCart;
    
        } catch (error) {

        }
}


// ---- //