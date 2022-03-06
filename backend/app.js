const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//settings 
app.set('port',process.env.PORT || 3003);
app.set('json spaces', 2);


//middleware
app.use(bodyParser.urlencoded({ extended : true }));


//starting the server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});

//requerimos las rutas
const productosApi = require('./routes/productosApi');

//rutes
app.use('/api',productosApi);

//error 404
app.use((req,res,next) =>{
   // res.status(404).render('error404');
    res.send("error 404")
    });