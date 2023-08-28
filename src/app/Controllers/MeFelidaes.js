const Felidae = require('../Models/Felidae')
const { multipleMongooseToObject } = require('../../utils/mongoose');

class MeFelidaes {

    //[GET] me/stored/felidaes
    storedFelidae(req, res, next) {
        Felidae.find()
            .then(felidaes => res.render('me/stored-felidaes', {
                felidaes: multipleMongooseToObject(felidaes)
            }))
            .catch(next);
    }
}

module.exports = new MeFelidaes();