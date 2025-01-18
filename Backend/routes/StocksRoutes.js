const express = require("express");
const router = express.Router();
const {userVerification} = require("../Middlewares/AuthMiddlewares")    

const { getHoldings, getPositions, newOrder } = require("../Controllers/StocksController"); 

router.post('/',userVerification)
router.route("/getHoldings").get(getHoldings);
router.route("/getPositions").get(getPositions);
router.route("/newOrder").post(newOrder);

module.exports = router;
