const express = require('express');

//requerimos multer para la subida de imagenes
const multer = require('multer');
const path = require('path');

//config de multer
const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'../database/img');
    },
    filename : (req,file,cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

const uploadFile = multer({storage});

const productosApi = require('../controllers/productosApi');
const router = express.Router();

//listar producto
router.get('/productos',productosApi.show);
//crear producto
// router.post('/producto/add',uploadFile.single('img'),productosApi.add);
router.post('/producto/add',productosApi.add);
//editar producto
router.post('/producto/edit/:id',uploadFile.single('img'),productosApi.edit);
//borrar producto
router.post('/producto/delete/:id',productosApi.delete);

module.exports = router;