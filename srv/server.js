const express = require("express");
const app = express();
const passport = require("passport");
const xsenv = require("@sap/xsenv");
const JWTStrategy = require("@sap/xssec").JWTStrategy;
const services = xsenv.getServices({ uaa:"xsuaa-node" });  // XSUAA service
passport.use(new JWTStrategy(services.uaa));
app.use(passport.initialize());
app.use(passport.authenticate("JWT", { session: false }));

app.get("/", function (req, res, next) {
  res.send("Welcome User: ");
});

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Basic NodeJs listening on port " + port);
});