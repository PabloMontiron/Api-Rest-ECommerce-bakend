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

        res.status(200);

    } catch (errror) {
        console.error("Error: ",error);

        response.satatus(500).json({error: "Ocurrio un error al intentar ontener la lista de productos"});
    } 
};

//
export const getProductBySkuCode = async (req,res) => {
    try {
        const skuCode = req.rarams.skuCode;
        const sku = await skuService.getProductBySkuCode(skuCode);

        res.status(200).json({error: "Se obtuvo el producto exitosamente"}) // cartel dudoso

    } catch (error) {
        console.error("Error: ",error);
        
        res.status(500).json(); // >>> FALTA D E S A R R O L L A R <<<
    }
}