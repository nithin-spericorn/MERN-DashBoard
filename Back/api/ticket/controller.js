const { failedResponse, goodResponse } = require("../../helper/response");
const service = require("./service");
const { Op } = require("sequelize");

exports.addTickets = async (req, res) => {
  try {
   
    let Tickets = {};
   

      Tickets = await service.create({
        total_tickets:15,
        open_tickets:11,
        closed_tickets:2,
        pending_tickets:2
      });
    

    return res.json(goodResponse({Tickets},"Tickets successfully Created"));
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message,
      data: {},
    });
  }
};
exports.findAllTickets = async (req, res) => {
  try {
    const Tickets = await service.findAllTickets();
    return res.json(
      goodResponse(
        { tickets: Tickets },
        "All tickets successfully listed"
      )
    );
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message,
      data: {},
    });
  }
};
