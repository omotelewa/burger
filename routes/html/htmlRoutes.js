const router = require("express").Router();
// import database connection
const db = require("../../config/connection");


// set up home page (root) route to load up handlebars template with burger list
router
  .route("/")
  .get(function(req, res) {
    db.query("SELECT * FROM burgers", function(err, dbBurger) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      };
      console.log(dbBurger);
      res.render("burgers", {burgersList: dbBurger});
    });
  });

module.exports = router;
