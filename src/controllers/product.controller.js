
import prisma from "../config/db.js";
import * as productService from "../services/product.service.js";

export const createProduct = async (req,res) => {
    try {
        // extraigo datos (por ej. de Postman) del request
        const data = req.body;

        // se pasa esos datos (Data) a la funcion productService
        const newProduct = await productService.createProduct(data);

        // si todo sale bien, se respode con codigo 201 (created) y se muestra el producto
        res.status(201).json(newProduct);

    } catch (error) {
        console.error("Error: ",error);
        // se responde con error 500 (Internal Server Error) si algo falla
        res.status(500).json({error: "Ocurrio un error al crear un produco"});
    }
};

