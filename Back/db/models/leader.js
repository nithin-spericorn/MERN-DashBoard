'use strict';
module.exports = (sequelize, DataTypes) => {
    const leaders = sequelize.define('leaders', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },{
        timestamps: true,
        underscored: true
    });

    return leaders;
};
