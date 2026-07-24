import { Router } from "express";

const router = Router();

router.get('/products', (req, res) => {
    res.send('Obteniendo productos');
});

router.get('/products/:id', (req, reS) => {
    const { id } = req.params;
    res.send('Obteniendo usuario con id: ' + id);
})

export default router;