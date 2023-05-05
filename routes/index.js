const express = require("express");
const mailer = require("../controllers/mailer");

const route = express.Router();

route.post('/send-mail', mailer.nodeMailer);

module.exports = route;