const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET Route for searching of multiple criteria on the homepage.
 */
router.get('/:sport/:level/:day', (req, res) => {
  const sport= req.params.sport;
  const level= req.params.level;
  const day = req.params.day;
  const sqlText = `SELECT *FROM "league"
  WHERE "sport" = $1 AND "competitive_level" = $2 AND "day_of_the_week" = $3;`;

//   console.log("req.params", req.params.id)
//   console.log("id", id);

  pool.query(sqlText,[sport,level,day])
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
