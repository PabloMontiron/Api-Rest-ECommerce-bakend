//import { Result } from "pg"; no va esto en controller. es de service
import * as skuService from "../services/sku.service.js";

//
export const createSku = async (req,res) => {
    try {
        const data = req.body;
        const newSku = await skuService.createSku(data);
        
        res.status(201).json(newSku);
        console.log("Sku creado exitosamente"); 

    } catch ( error ) { 
        console.error("error: ",error);

        res.status(500).json({error: "Ocurrio un error al intentar acceder a createSku"});
    }
};

//
export const updateSkuBySkuCode = async (req,res) => {
    try {
        const skuCode = req.params.skuCode; // capturo el skuCode esto se debe llamar igual que el params en routes /:skucode
        const newData = req.body; // capturo el cuerpo del mensaje con la nueva infromacoin 

        const updatedSku = await skuService.updateSkuBySkuCode(skuCode,newData);

        res.status(200).json(updatedSku);

    } catch (error) {
        console.error("Error: ",error);

        res.status(500).json({error: "Ocurrio un error al intentar actualizar el producto"});
    }
};

//
export const getAllSkus = async (req,res) => {
    try {
        const skus = await skuService.getAllSkus();

        res.status(200).json(skus);

    } catch (errror) {
        console.error("Error: ",error);

        response.satatus(500).json({error: "Ocurrio un error al intentar ontener la lista de productos"});
    } 
};

//
export const getSkuBySkuCode = async (req,res) => {
    try {
        const skuCode = req.rarams.skuCode;

        const sku = await skuService.getProductBySkuCode(skuCode);

        res.status(200).json(sku); 

    } catch (error) {
        console.error("Error: ",error);
        
        res.status(500).json({error: "ocurrio un error al intentar encontrar el producto"}); 
    }
};

//
export const deleteSkuBySkuCode = async (req,res) => {
    try {
        const skuCode = req.params.skuCode;
        const skuDelete = await skuService.deleteSkuBySkuCode(skuDelete);

        res.status(200).json({message: `Sku COD: ${skuCode} ha sido eliminado`});
    } catch (error) {
        console.error("Error: ",error);
        res.status(500).json({error: "Error al obtener el producto"});
    }
};

//
export const getLowStockSkus = async (req,res) => {
    try {
        const skusLowStock = await skuService.getLowStockSkus();

        res.status(200).json(skusLowStock);

    } catch (error) {
        console.error("Error: ",error);
        res.status(500).json({error: "Error al obtener lista de productos (skus)"})
    }
};