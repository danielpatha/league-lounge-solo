const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/:id', (req, res) => {
    // GET route code here
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
 * PUT route template
 */
 router.put('/:id', (req, res) => {
    // Update this single student
    const idToUpdate = req.params.id;
    const sqlText = `UPDATE league SET league_city_name = $1, sport = $2, competitive_level = $3, season = $4, day_of_the_week = $5, time_of_day = $6, co_ed = $7, notes = $8, link = $9, photo = $10 WHERE id = $11;`;
    pool.query(sqlText, [req.body.league_city_name, req.body.sport, req.body.competitive_level, req.body.season, req.body.day_of_the_week, req.body.time_of_day, req.body.co_ed, req.body.notes, req.body.link, req.body.photo, idToUpdate])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

// POST students
router.post('/', (req, res) => {
    console.log(req.body);
    const sqlText = `INSERT INTO league (league_city__name, sport, competitive_level, season, day_of_the_week, time_of_day, co_ed, notes, link, photo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;

    pool.query(sqlText, [req.body.league_city_name, req.body.sport, req.body.competitive_level, req.body.season, req.body.day_of_the_week, req.body.time_of_day, req.body.co_ed, req.body.notes, req.body.link, req.body.photo])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});



module.exports = router;

//This is just template for routes