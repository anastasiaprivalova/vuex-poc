const express = require('express');
const  ObjectId = require('mongodb').ObjectId;
const MongoClient = require('mongodb').MongoClient;

(() => {
  const app = express();
  const port = process.env.PORT || 8000;
  const url = 'mongodb://localhost:27017';
  let db;

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
  });

  MongoClient.connect(url, function(err, database) {
    if(err) {
      console.log(err);
    } else {
      console.log('Connected correctly to db');
      db = database.db('vuex-poc');
    }
  });
  app.get('/', (req, res) => {
    db.collection('products').find().toArray((err, products) => {

      if (err) {
        console.log(err);
      } else {
        res.json(products);
      }
    });
  });

  app.get('/:id', (req, res) => {
    db.collection('products').findOne({_id: ObjectId(req.params.id)}, {}, (err, product) => {
      if (err) {
        console.log(err);
      } else {
        res.json(product);
      }
    });
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
  });
})();