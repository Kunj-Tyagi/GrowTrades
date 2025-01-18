const { HoldingsModel } = require("../models/HoldingsModels");
const { OrdersModel } = require("../models/OrdersModels");
const { PositionsModel } = require("../models/PositionsModels");

const getHoldings = async (req, res) => {
  const holdings = await HoldingsModel.find({});
  res.send(holdings);
};

const getPositions = async (req, res) => {
  const positions = await PositionsModel.find({});
  res.send(positions);
};

const newOrder = (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
  res.send("Done!");
};

module.exports = { getHoldings, getPositions, newOrder }; 
