const express = require('express');

const listadoController = require('../controllers/listadoCrontroller');
const router = express.Router();

router.get('/listado',listadoController.listado);
router.get('/producto',listadoController.producto);
router.get('/formulario',listadoController.formulario);
router.get('/formularioedit/:id',listadoController.formularioedit);

module.exports = router;