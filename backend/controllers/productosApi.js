// require db
const { render } = require("express/lib/response");
let db = require("../database/models");

const productoController = {
    // showAll:(req,res)=>{
    //     db.Producto.findAll()
    //     .then(producto =>{
    //         let respuestaShowAll = {
    //         meta:{
    //             status:res.statusCode,
    //             total:producto.length,
    //             url:'api/productos'
    //         },
    //         data:{
    //         producto
    //         }
    //     }
    //     res.json(respuestaShowAll);
    //     })
    //     .catch(err => res.sendStatus(500).send(err));
    // },
    show:(req,res)=>{
        const pageAsNumber = Number.parseInt(req.query.page);
        const sizeAsNumber = Number.parseInt(req.query.size);

        let page = 1;
        if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
            page = pageAsNumber;
        }

        let size = 9;
        if(!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 8){
                size = sizeAsNumber;
        }
        
        db.Producto.findAndCountAll({
            limit:size,
            offset:(page - 1) * size,            
        })
        .then(producto =>{
            let respuestaShow = {
            meta:{
                status:res.statusCode,
                total:producto.length,
                url:'api/productos'
            },
            data:{
                funkopops : producto.rows,
                totalPages : Math.ceil(producto.count / size),
                page: page,
            }
        }
        res.json(respuestaShow);
        })
        .catch(err => res.sendStatus(500).send(err));
    },
    add:(req,res)=>{
        db.Producto.create({
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
        });
        console.log({
            meta:{
                status:res.statusCode,
                url:'api/producto/add'
            },
            data:{
                info: "Producto agregado con exito",
            }
        });
        return res.redirect("http://localhost:3000/listado");
    },
    edit:(req,res)=>{
        db.Producto.update({
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
        },{
            where:{
                id: req.params.id
            },
        });
        console.log({
            meta:{
                status:res.statusCode,
                url:'api/producto/edit/:id'
            },
            data:"Producto editado con exito"
        });
        return res.redirect("http://localhost:3000/producto");
    },
    delete:(req,res)=>{
        db.Producto.destroy({
            where:{
                id:req.params.id
            }
        });
        console.log({
            meta:{
                status:res.statusCode,
                url:'api/producto/:id'
            },
            data: "Producto eliminado con exito"
        });
        res.redirect("http://localhost:3000/producto");
        
    },
    
}

module.exports = productoController;