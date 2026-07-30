import prisma from "../config/db.js";


export const getAllProducts = async () => {
    try {
        const products = await prisma.product.findMany({
         include: {
            skus: true
         }
        });
        return products;

     } catch (error) { 
        console.error("Error en getAllProducts: ",error);
        throw new Error("No se pudo obtener la lista de productos");
     }
};

export const getProductById = async (id) => {
   try {
      const product = await prisma.product.findUnique({
         where: { id: id },
         include: {
            skus: true
         }
      })
      return product;

   } catch (error) {
      console.error("Error: ",error);
      throw new Error("No se pudo obtener el producto");
   }
}

export const createProduct = async (productData) => {
   try {
      const newProduct = await prisma.product.create({
         data: productData
      });
      return newProduct;

   } catch (error) {
      console.error("Error al crear el producto: ",error);
      throw new Error("Error al crear el producto");
   }
};

export const deleteProductById = async (id) => {
   try {

      const product= await prisma.product.delete({
         where: { id: id }
      })
      return product;

   } catch (error) {
      console.error("Error: ",error);
      throw new Error("No se pudo eliminar el producto")
   }
}

export const softDeleteProductById = async (id) => {
   try {
      const product = await prisma.product.update({
         where: { id: id },
         data: { isActive: false }
         });
      return product

   } catch (error) {
      console.error("Error: ",error);
      throw new Error("No se pudo desactivar el producto")
   }
}

export const activateProductById = async (id) => {
   try {
      const product = await prisma.product.update({
         where: { id: id },
         data: { isActive: true }
      });
      return product
   
   } catch (error) {
      console.error("Error: ",error)
      throw new Error("No se pudo activar el producto");
   }
}