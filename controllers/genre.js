const GenreModel = require('../models/genre');

exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Todos los campos son obligatorios'
        });
    }

    const genre = new GenreModel({
        name: req.body.name,
        status: req.body.status
    });

    genre.save()
        .then(
            (dataGender) => {
                res.send(dataGender)
            }
        ).catch(
            (error) => {
                return res.status(500).send({
                    message: error.message
                })
            }
        )
}