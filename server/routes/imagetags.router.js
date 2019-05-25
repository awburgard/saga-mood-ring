const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/all', (req, res) => {
    const queryString = `SELECT * FROM "images"
                        JOIN "image_tags" ON "images"."id" = "image_tags"."image_id"
                        JOIN "tags" ON "image_tags"."tag_id"="tags"."id";`;

    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});


router.post('/add', (req,res) => {
    const queryString = `INSERT INTO "image_tags" ("image_id", "tag_id")
                    VALUES ($1, $2);`;

    pool.query(queryString, [req.body.imageId, req.body.tagId])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

router.put('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

module.exports = router;