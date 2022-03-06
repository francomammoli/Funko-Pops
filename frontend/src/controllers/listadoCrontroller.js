const  fetch  =  require ( 'cross-fetch' ) ;

const listadoController = {
    listado:(req,res)=>{
        const pagina = req.query.page
        fetch('http://localhost:3003/api/productos' + '?page=' + pagina)
        .then(response => response.json())
        .then(producto => {
            res.render('listado',{producto})
        })
        .catch(err => res.sendStatus(500).send(err));
    },
    producto:(req,res)=>{
        const paginaP = req.query.page
        fetch('http://localhost:3003/api/productos' + '?page=' + paginaP)
        .then(response => response.json())
        .then(funkos => {
            res.render('productos',{funkos})
        })
        .catch(err => res.sendStatus(500).send(err));
    },
    formulario:(req,res)=>{
        return res.render("formulario");
    },
    formularioedit:(req,res)=>{
        const id = req.params.id;
        return res.render("formularioedit",{id});
    },
}

module.exports = listadoController;