module.exports = function(sequelize, dataTypes){
    let alias = "Producto";

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        price:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        image:{
            type: dataTypes.STRING,
            allowNull: false,
        },
    }

    let config = {
        tableName: "productos",
        timestamps: false,
    }

    let Producto = sequelize.define(alias,cols,config);

    return Producto;
}