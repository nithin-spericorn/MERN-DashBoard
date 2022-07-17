const { failedResponse, goodResponse } = require("../../helper/response");
const service = require("./service");
const { Op } = require("sequelize");

exports.addLeaders = async (req, res) => {
  try {
    let users = [
      {
        name: "Joseph",
        image:
          "https://pyxis.nymag.com/v1/imgs/da9/942/25edbd2d6352e8dcc693ad8079177e0d87-17-elon-musk.rsocial.w1200.jpg",
      },
      {
        name: "Nithin",
        image:
          "https://images.seattletimes.com/wp-content/uploads/2018/08/08072018_elonmusk_smile_171413.jpg?d=780x522",
      },
      {
        name: "mathayi",
        image:
          "https://images.seattletimes.com/wp-content/uploads/2018/08/08072018_elonmusk_smile_171413.jpg?d=780x522",
      },
      {
        name: "Steephan",
        image:
          "https://images.seattletimes.com/wp-content/uploads/2018/08/08072018_elonmusk_smile_171413.jpg?d=780x522",
      }
    ];
    let Leader = {};
    for (i = 0; i < users.length; i++) {
      console.log(users[1]);

      Leader = await service.create({
        name: users[i].name,
        image: users[i].image,
      });
    }

    return res.json(goodResponse({Leader},"Learders successfully stored in database"));
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message,
      data: {},
    });
  }
};
exports.findAllLeaders = async (req, res) => {
  try {
    const Leaders = await service.findAll();
    return res.json(
      goodResponse(
        { leaders: Leaders },
        "Learders successfully listed in database"
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
