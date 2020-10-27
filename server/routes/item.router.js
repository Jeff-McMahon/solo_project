const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// Step #1: Copied template into new folder 'item.router.js'
/**
 * GET route template
 */

 // Router 1: display entire collection of user

router.get('/', (req, res) => {
    const thisUser = req.body.id
    const queryText = `SELECT * FROM "collections" WHERE "user_id" = 2 AND "list_master" = true`;
  // GET route code here
  pool.query(queryText)
    .then((result) => res.send(result.rows))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500)
    });
});


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;