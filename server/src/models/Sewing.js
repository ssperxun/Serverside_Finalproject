module.exports = (sequelize, DataTypes) => {
    const Sewing = sequelize.define('Sewing', {
        product: DataTypes.STRING,
        brand: DataTypes.STRING,
        price: DataTypes.INTEGER,
        color: DataTypes.STRING,
        suitable: DataTypes.STRING,
        type: DataTypes.STRING,
        material: DataTypes.STRING,
    })

    return Sewing
}