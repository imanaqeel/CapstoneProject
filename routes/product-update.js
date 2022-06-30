const express = require('express');
const router = express.Router();

const ProductModel = require('../models/ProductModel.js');

router.post('/update',                                      
    function(req, res) {

        const document = {
            "name": req.body.name,
            "productId": req.body.productId,
            "description": req.body.description,
            "price": req.body.price,
            "category": req.body.category,
            "quantity": req.body.quantity
        };

        ProductModel
        .update(document)
        .then(
            function(dbDocument) {
                res.json(
                    {
                        document: dbDocument,
                        message: "Product Updated"
                    }
                );
            }
        )
        .catch(
            function(dbError) {
                console.log('DB product Update error', dbError);
                res.json(
                    {
                        message: "Product Update error"
                    }
                );
            }
        )
    }
);

module.exports = router;