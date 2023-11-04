module.exports = (sequelize, DataTypes) => {
    const Decongestant = sequelize.define('Decongestant', {
        name_thai : DataTypes.STRING,
        name_eng : DataTypes.STRING,
        category : DataTypes.STRING,
        detail : DataTypes.STRING,
        size : DataTypes.STRING,
        price : DataTypes.INTEGER
    })
    return Decongestant
}