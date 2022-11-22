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
    const sqlText = `UPDATE league SET league_city_name = $1 WHERE id = $2`;
    pool.query(sqlText, [req.body.league_city_name, idToUpdate])
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
    const newLeague = req.body.league_city_name;
    const sqlText = `INSERT INTO students (league_city__name) VALUES ($1)`;

    pool.query(sqlText, [newLeague])
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