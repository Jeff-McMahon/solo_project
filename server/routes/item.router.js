const express = require("express");
const { rejectUnauthenticated } = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();
// Step #1: Copied template into new folder 'item.router.js'


// Router 1: display entire collection of user
// Router works through Postman - 10.27 1540

router.get("/", rejectUnauthenticated, (req, res) => {
  console.log(req.user.id)
  const queryText = `SELECT * FROM "collections" WHERE "user_id" = ($1) ORDER BY "item_name" ASC`;
  pool
    .query(queryText, [req.user.id])
    .then((result) => res.send(result.rows))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Router 2: Delete an item in the user's collection

router.delete("/delete/:id", (req, res) => {
  console.log(req);
  console.log(req.params); 
  let reqId = req.params.id;

  const queryText = `DELETE FROM "collections" WHERE "id" = ($1)`;
  pool
    .query(queryText, [reqId]) 
    .then((result) => res.sendStatus(200))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Router #3: Adding an item to the user's collection
// POST '/item/add'
router.post("/add", rejectUnauthenticated, (req, res) => {
    console.log('in Insert router', req.body)
    // TODO: Pull your values out of req.body
    const id=req.user.id
    const name= req.body.item_name
    const model=req.body.item_model
    const detail=req.body.item_detail
    const location=req.body.item_location
    const image=req.body.item_image
    const price=req.body.item_price
    const queryText = `INSERT INTO "collections" ("user_id","item_name","item_model","item_detail","item_location","item_image","item_price","list_master","list_forsale","list_wish") 
                        VALUES ($1, $2, $3, $4, $5, $6, $7, true, true, true);`;
    pool
      .query(queryText , [id, name, model, detail, location, image, price]) // TODO: Add your values array here
      .then((result) => res.sendStatus(200))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  });

  router.put('/:id', rejectUnauthenticated, (req,res) => {
    console.log(req.params.id);
    console.log('editing item', req.params.id);
    let queryText= `UPDATE "collections" SET "list_forsale" = 'true' WHERE "id" =$1`;
    pool.query(queryText, [req.params.id])
    .then(result => {
      res.sendStatus(204);
    })
    .catch(err => {
      console.log('error editing in item router', err);
      res.sendStatus(500);
    });

  })



module.exports = router;
