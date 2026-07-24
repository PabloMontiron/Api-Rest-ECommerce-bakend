import prisma from "../config/db.js";

export const getAllProducts = async () => {
    try {
        const products = await prisma.product.findMany();
        
     } catch (error) { 
        console.error("Error en getAllProducts: ",error);
        throw new Error("No se pudo obtener la lista de productos");
     }
};

export const createProduct = async (productData) => {
   try {
      const newProduct = await prisma.product.create({
         data: productData
      });
      return newProduct;

   } catch (error) {
      console.error("Error al crear el producto. ERROR: ",error);
      throw new Error("Error al crear el producto");
   }
};