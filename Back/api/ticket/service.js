
const db = require("../../db/models");

module.exports = {
    create: async (data = {}) => {
        const info = await db.tickets.create({
            ...data
        });
        return info ? info.dataValues : null
    },
    findAllTickets: async (req,res) => {
        
            const Tickets = await db.tickets.findAll();
            return Tickets?Tickets:{}
    }
}