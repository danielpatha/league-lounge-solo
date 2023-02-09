const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for landing page
 */
router.get('/', (req, res) => {
  // GET route code here
  const sqlText = `SELECT *FROM "league"
  ORDER BY "id" DESC
  LIMIT 3;`;

  pool.query(sqlText)
  .then((result) =>{
   // console.log('result is:',result.rows)
   res.send(result.rows)
  })
  .catch((error) =>{
   console.log('error fetching items', error)
   res.sendStatus(500)
  })

});


module.exports = router;

