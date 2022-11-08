module.exports = (sequelize, DataTypes) => {
    
    let cliente = sequelize.define(
        "Cliente",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            senha: {
                type: DataTypes.STRING(64),
                allowNull: false,
            },
            endereco: {
                type: DataTypes.STRING(45),
                allowNull: true,
            }
        },
        {
            tableName: "clientes",
            timestamps: false
        }
    )

    cliente.associate = (models)=>{
        // cliente.hasMany(models.Publicacao, {as:"publicacoes", foreignKey:"usuarios_id"});
        // cliente.belongsToMany(
        //     models.Usuario,
        //     {
        //         as:"amigos",
        //         through:"amizades",
        //         foreignKey:"usuarios_id1",
        //         otherKey:"usuarios_id2",
        //         timestamps: false
        //     }
        // );
    }

    return cliente;
}