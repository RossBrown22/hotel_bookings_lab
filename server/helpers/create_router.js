const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = (collection) => {
    
    const router = express.Router();

    //GET
    router.get('/', (req, res) => {
        collection.find().toArray()
        .then(docs => res.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err})
        });
    });

    // CREATE

    return router
}

module.exports = createRouter;