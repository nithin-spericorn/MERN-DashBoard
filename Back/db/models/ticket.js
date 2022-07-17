'use strict';
module.exports = (sequelize, DataTypes) => {
    const tickets = sequelize.define('tickets', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        total_tickets: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        open_tickets: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        closed_tickets: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pending_tickets: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },{
        timestamps: true,
        underscored: true
    });

    return tickets;
};
