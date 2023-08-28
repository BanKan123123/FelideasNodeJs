const Felidae = require('../Models/Felidae');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class SiteController {

    home(req, res, next) {
        Felidae.find()
            .then(felidaes => {
                res.render('home', { felidaes: multipleMongooseToObject(felidaes) });
            })
            .catch(next);
    }

    search(req, res, next) {
        res.render('search');
    }
}


module.exports = new SiteController();