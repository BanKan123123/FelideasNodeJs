const Felidae = require('../Models/Felidae');
const { mongooseToObject } = require('../../utils/mongoose');


class FelidaeController {

    create(req, res, next) {
        res.render('felidaes/create');
    };

    //[GET] /felidaes/:slug
    show(req, res, next) {
        Felidae.findOne({ slug: req.params.slug })
            .then(felidae => {
                res.render('felidaes/show', { felidae: mongooseToObject(felidae) });
            })
            .catch(next);
    }

    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const felidae = new Felidae(req.body);

        felidae.save()
            .then(() => res.redirect('/'))
            .catch(err => {
                res.json({ err: err });
                res.status(500).send("An error occurred while saving the data.");
            })
    }

    //[GET] felidaes/:id/edit
    edit(req, res, next) {
        Felidae.findById(req.params.id)
            .then(felidae => {
                res.render('felidaes/edit', {
                    felidae: mongooseToObject(felidae)
                })
            })
            .catch(next);
    }

    update(req, res, next) {
        Felidae.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/felidaes'))
            .catch(next);
    }

}

module.exports = new FelidaeController();