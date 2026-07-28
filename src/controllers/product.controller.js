import * as productService from "../services/product.service.js";

// getAllProduucts
export const getAllProducts = async (req,res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);

    } catch (error) {
        console.error("Error: ",error);
        res.status(500).json({error: "Ocurrio un error. No se obtuvo la lista de prdoductos"});
    }
}

export const getProductById = async (req,res) => {
    try {
        const id = req.params.id;

        const product = await productService.getProductById(id);

        res.status(200).json(product);
    } catch (error) {
        console.error("Error: ",error);
        res.status(500).json({Error: "Error al obtener el producto"});
    }
}

// createProduct
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
        res.status(500).json({error: "Ocurrio un error al crear el produco"});
    }
};

// deleteProductById
export const deleteProductById = async (req,res) => {
    try {
        const id = req.params.id;

        const product = await productService.deleteProductById(id);

        res.status(200).json({result: `Se elimino el producto con id: ${id}`});

    } catch (error) {
        console.error("Error: ",error);
        res.status(500).json({error: "Ocurrio un error al liminar el producto"});
    }
}

export const softDeleteProductById = async (req,res) => {
    try {
        const id = req.params.id;

        const product = await productService.softDeleteProductById(id);

        res.status(200).json({result: "Producto ocultado"});

    } catch (error) {
        console.error("Error: ",error);
        res.status(500).json({Error: "Ocurrio un error al ocultar el producto"});
    }
}

export const activateProductById = async (req,res) => {
    try {
        const id = req.params.id;

        const product = await productService.activateProductById(id);

        res.status(200).json({resul: "Producto activado"});

    } catch (error) {
        console.error("Error: ",error);
        res.status(500).json({Error: "Ocurrio un error al activar el producto"});
    }; 
}


