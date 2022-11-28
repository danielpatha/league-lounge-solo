const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
router.get('/search/:sport', (req, res) => {
  // GET route code here
  const sport = req.params.sport;
  
  const sqlText = `SELECT *FROM "league"
  WHERE "sport" = $1 ORDER BY "league_city_name" ASC;`;

//   console.log("req.params", req.params.id)
//   console.log("id", id);

  pool.query(sqlText,[sport])
  .then((result) =>{
   // console.log('result is:',result.rows)
   res.send(result.rows) 
   console.log(result.rows);
  })
  .catch((error) =>{
   console.log('error fetching items', error)
   res.sendStatus(500)
  })
  })

//   function compSearch(){
//   const sqlText = `SELECT *FROM "league"
//   WHERE "competitive_level" = $1;`;

// //   console.log("req.params", req.params.id)
// //   console.log("id", id);

//   pool.query(sqlText,[sport])
//   .then((result) =>{
//    // console.log('result is:',result.rows)
//    res.send(result.rows) 
//    console.log(result.rows);
//   })
//   .catch((error) =>{
//    console.log('error fetching items', error)
//    res.sendStatus(500)
//   })
//   }
// });




// router.get('/search/:level', (req, res) => {
//   // GET route code here
//   const level = req.params.level;
//   const sqlText = `SELECT *FROM "league"
//   WHERE "competitive_level" = $1;`;

// //   console.log("req.params", req.params.id)
// //   console.log("id", id);

//   pool.query(sqlText,[level])
//   .then((result) =>{
//    // console.log('result is:',result.rows)
//    res.send(result.rows) 
//    console.log(result.rows);
//   })
//   .catch((error) =>{
//    console.log('error fetching items', error)
//    res.sendStatus(500)
//   })

// });


// /**
//  * POST route template
//  */
// router.post('/', (req, res) => {
//   // POST route code here
// });





module.exports = router;

