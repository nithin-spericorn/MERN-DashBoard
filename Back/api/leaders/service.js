
const db = require("../../db/models");

module.exports = {
    create: async (data = {}) => {
        const info = await db.leaders.create({
            ...data
        });
        return info ? info : null
    },
    findAll: async () => {
        
            const leaders = await db.leaders.findAll();
            return leaders?leaders:null
    }
}