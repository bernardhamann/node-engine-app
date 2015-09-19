var router = require('express').Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var restMongoose = require('ne-rest-mongoose');

var pageSchema = new Schema({
    path:{type: String, required: true},
    title:{type: String, required: true},
    description:{type: String, required: true},
    pd:{
        pdNumber:{type: Number, required: false, default: '0'},
        pd1:{
            path: {type: String, required: false}
        }
    },
    createdAt:{type: String, required: true}

});

var pageModel = mongoose.model(
    'page',
    pageSchema,
    'page');

restMongoose.model(router, pageModel);

module.exports = router;