import prisma from "../config/db.js";

// comienzan las funciones propias de sku

// 1. POST - ceateSku
export const createSku = async (skuData) => {
    try {
        const newSku = await prisma.sku.create({
            data: skuData
        })
        return newSku;

    } catch (error) {
        console.error("Error: ",error );

        throw new Error("Error al crear un Sku");
    }
};

// 2. PATCH - updateSkuBySkuCode(skuCode,newData)
export const updateSkuBySkuCode = async (skuCode,newData) => {
    try {
        const skuUpdate = await prisma.sku.update({
            where: {skuCode: skuCode},
            data: newData
        })
        return skuUpdate;

    } catch (error) {
        console.error("Error: ",error);

        throw new Error("Error al intentar actualizar el sku del producto");
    }
};

// 3. GET - getAllStock
export const getAllSkus = async () => {
    try {
        const skus = await prisma.findMany();
        return skus;

    } catch (error) {
        console.error("Error: ",error);

        throw new Error("Error al listar Skus");
    }
};

// 4. GET - getProductBySkuCode
export const getProductBySkuCode = async (skuCode) => {
    try {
        const sku = await prisma.sku.findUnique({
            where: {skuCode: skuCode}
        })
        return sku;

    } catch (error) {
        console.error("Error: ",error);

        throw new Error(`No se pudo obtener el sku COD: ${skuCode}`);
    }
};

// 5. DELETE - deleteSluBySkuCode(skuCode)
export const deleteSkuBySkuCode = async (skuCode) => {
    try {
        const skuDelete = await prisma.sku.delete({
            where: {skuCode: skuCode}
        })
        return skuDelete;

    } catch (error) {
        console.error("Error: ",error);

        throw new Error("Error al intentar eliminar el producto");
    }
};

// 6. GET
export const getLowStockSkus = async () => {
    try {
        const skusList = await prisma.sku.findMany({
            where: 
            {   
             stockMin: {
                 not: null
                },
                
              stockDisp: {
                lte: prisma.sku.fields.stockMin // lte => Less than or Equal ( <= )
              }  
            }
        });
        return skusList;

    } catch (error) {
        console.error("Error: ",error);
        throw new Error("No se puedo obtener la lista de stock por debajo del minimo");
    }
};