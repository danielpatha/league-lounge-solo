const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for details page.
 */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const sqlText = `SELECT *FROM "league"
  WHERE "id" = $1;`;

  console.log("req.params", req.params.id)
  console.log("id", id);

  pool.query(sqlText,[id])
  .then((result) =>{
   // console.log('result is:',result.rows)
   res.send(result.rows[0]) 
   console.log(result.rows);
  })
  .catch((error) =>{
   console.log('error fetching items', error)
   res.sendStatus(500)
  })

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  //const queryText = `INSERT INTO "user" (username, password)
   // VALUES ($1, $2) RETURNING id`;
  const sqlText = `INSERT INTO "league" (league_city_name, sport, competitive_level, season, day_of_the_week, time_of_day, co_ed, notes, link, photo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id`;

  console.log("req.body", req.body)

  pool
    .query(sqlText, [req.body.league_city_name, req.body.sport, req.body.competitive_level, req.body.season, req.body.day_of_the_week, req.body.time_of_day, req.body.co_ed, req.body.notes, req.body.link, req.body.photo])
    .then((queryResponse) => res.send(queryResponse))
    .catch((err) => {
      console.log('League Add failed: ', err);
      res.sendStatus(500);
    });
  
});


/**
 * Delete route for the league page as the Admin user.
 */
 router.delete('/:id', (req, res) => {
  // GET route code here
  const id = req.params.id;
  const sqlText = `DELETE FROM "league"
  WHERE "id" = $1;`;

  console.log("req.params", req.params.id)
  console.log("id", id);

  pool.query(sqlText,[id])
  .then((result) =>{
   // console.log('result is:',result.rows)
   res.send(result.rows[0]) 
   console.log(result.rows);
  })
  .catch((error) =>{
   console.log('error fetching items', error)
   res.sendStatus(500)
  })

});



module.exports = router;

