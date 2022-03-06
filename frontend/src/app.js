const express = require('express');
const app = express();

//settings 
app.set('port',process.env.PORT || 3000);

//volvemos accesible la capeta public para todo el proyecto
app.use(express.static('public'));
//le aclaramos a express cual es el motor de plantillas que vamos a usar
app.set('view engine','ejs');
app.set('views','./public/views');


//starting the server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});

//requerimos las rutas
const listadoRutes = require('./routes/listadoRoutes');

//rutes
app.use('/',listadoRutes);

//error 404
app.use((req,res,next) =>{
   // res.status(404).render('error404');
    res.send("error 404")
    });