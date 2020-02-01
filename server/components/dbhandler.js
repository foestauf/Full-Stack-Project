const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const urlSchema = new Schema({
    fullUrl: {type: String, required: true},
    shortUrl: {type: String, required: true, unique: true},
    dateCreated: {type: Number, default: Date.now},
    lastUsedDate: {type: Number, default: Date.now}
});

const Url = mongoose.model("Url", urlSchema);

/* function createAndSaveUrl(param1, param2) {
    const url = new Url({
        fullUrl: param1,
        shortUrl: param2,
        dateCreated: Date.now,
        lastUsedDate: Date.now
    });
    url.save((err, data) => {
        if (err) return done(err)
        return done(null, data)
    })
};
*/

/*function findUrl(param1) {
    Url.find({url: param1}, (err, data) => {
        if (err) return console.log(err);
        done(null, urlFound);
    });
};
*/
module.exports = mongoose.model('Url', urlSchema);
// module.exports = createAndSaveUrl();