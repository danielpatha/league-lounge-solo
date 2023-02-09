const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for searching leagues by level.
 */
router.get('/:level', (req, res) => {
  // GET route code here
  const level = req.params.level;
  const sqlText = `SELECT *FROM "league"
  WHERE "competitive_level" = $1;`;

//   console.log("req.params", req.params.id)
//   console.log("id", id);

  pool.query(sqlText,[level])
  .then((result) =>{
   // console.log('result is:',result.rows)
   res.send(result.rows) 
   console.log(result.rows);
  })
  .catch((error) =>{
   console.log('error fetching items', error)
   res.sendStatus(500)
  })

});

module.exports = router;
