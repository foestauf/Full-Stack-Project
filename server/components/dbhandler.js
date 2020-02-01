require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;
const urlSchema = new Schema({
    fullUrl: {type: String, required: true},
    shortUrl: {type: String, required: true},
    dateCreated: Number,
    lastUsedDate: Number
});
const Url = mongoose.model("Url", urlSchema);

function createAndSaveUrl(param1, param2, param3, param4) {
    const Url = new Url({
        fullUrl: param1,
        shortUrl: param2,
        dateCreated: param3,
        lastUsedDate: param4
    })
    Url.save((err, data) => {
        if (err) return done(err)
        return done(null, data)
    })
};

function findUrl(param1) {
    Url.find({url: param1}, (err, data) => {
        if (err) return console.log(err);
        done(null, urlFound);
    });
};