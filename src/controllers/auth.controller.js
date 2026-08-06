import * as authService from "../services/auth.service.js";

export const login = async (req,res) => {
    try{
        const { email, password } = req.body; // en ese body vendrian todos los campos del modelo user pero ahi se hace desestructuracion de solo dos de sus campos?

        // validacion de que esten ambos campos completos
        if (!email || !password) {
            return res.status(400).json({error: "El email y la contraseña son obligatoroios"});
        };

        // si esta todo ok se pasa al servicio para que los auna con jwt y bcrypt. declaro una constante con el login (su informacion en la variable data)
        const result = await authService.login(email,password);

        return res.status(200).json(result);

    } catch (error) {
        // si el servicio lanzo error, el codigo pasa al bloque catch
        console.error("ERROR EN LOGIN: ",error.message); // el .message muestra el throw new error("mensaje desde el servicio"), y si solo pongo "err: ",error ?

        return res.status(400).json({error: error.message});
    }
};

