const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for searching leagues by day on homepeage.
 */
router.get('/:day', (req, res) => {
  // GET route code here
  const day = req.params.day;
  const sqlText = `SELECT *FROM "league"
  WHERE "day_of_the_week" = $1;`;

//   console.log("req.params", req.params.id)
//   console.log("id", id);

  pool.query(sqlText,[day])
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
