import * as authService from "../services/auth.service.js";

// en el pdf mencionan que debo usar si o si la libreria "app.use(express.json()); // middleware" eso pero en algo dele stilo body.json();

export const login = async (req,res) => {
    try{
        const { email, password } = req.body;

        // validacion de que esten ambos campos completos
        if (!email || !password) {
            return res.status(400).json({error: "El mail y la contraseña son obligatoroios"});
        };

        // si esta ok el paso anterior se pasan esos datos al servicio para que los auna con jwt y bcrypt
        const result = await authService.login(email,password);

        return res.status(400).json(result);

    } catch (error) {
        // si el servicio lanzo error, el codigo pasa al bloque catch
        console.error("ERROR EN LOGIN: ",error.message);

        return res.status(400).json({error: error.message});
    }
};

