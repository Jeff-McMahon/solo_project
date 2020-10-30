const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
// Step #1: Copied template into new folder 'item.router.js'


// Router 1: display entire collection of user
// Router works through Postman - 10.27 1540

router.get("/", (req, res) => {
  console.log(req.user.id)
  const queryText = `SELECT * FROM "collections" WHERE "user_id" = ($1)`;
  pool
    .query(queryText, [req.user.id])
    .then((result) => res.send(result.rows))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Router 2: Delete an item in the user's collection

router.delete("/delete", (req, res) => {
  //const thisUser = req.body.id
  const queryText = `DELETE FROM "collections" WHERE "item_name" = 'GB008'`;
  pool
    .query(queryText)
    .then((result) => res.sendStatus(200))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Router #3: Adding an item to the user's collection

router.post("/add", (req, res) => {
    //const thisUser = req.body.id
    const queryText = `INSERT INTO "collections" ("user_id","item_name","item_model","item_detail","item_location","item_image","item_price","list_master","list_forsale","list_wish") VALUES (2, 'Louis Tully', 'GB008', 'null', 'box', 'gb008.png', '8.88', true, true, false);`;
    pool
      .query(queryText)
      .then((result) => res.sendStatus(200))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  });



module.exports = router;
