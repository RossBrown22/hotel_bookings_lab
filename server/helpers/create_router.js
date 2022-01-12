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
                res.json({ status: 500, error: err })
            });
    });

    //SHOW - GET ONE BY ID
    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection.findOne({ _id: ObjectID(id) })
            .then((doc) => res.json(doc))
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({
                    'status': 500,
                    'error': err
                })
            });
    });

    // CREATE
    router.post('/', (req, res) => {
        collection.insertOne(req.body)
            .then((result) => res.json(result.ops[0]))
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({
                    'status': 500,
                    'error': err
                })
            });
    });

    //DESTROY
    router.delete('/:id', (req, res) => {
        collection.deleteOne({ _id: ObjectID(req.params.id) })
            .then((result) => res.json(result))
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({
                    'status': 500,
                    'error': err
                })
            });
    });

    //UPDATE
    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        collection.updateOne(
            { _id: ObjectID(id) },
            { $set: updatedData }
        )
            .then((result) => res.json(result))
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({
                    'status': 500,
                    'error': err
                })
            });
    });

    return router;
};

module.exports = createRouter;