const GenreModel = require('../models/genre');

/**
 * @param {*} req
 * @param {*} res 
 */

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

exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        });
    }

    const genre = {
        name: req.body.name,
        status: req.body.status
    }

    GenreModel.findByIdAndUpdate(req.params.id, genre, { new: true })
        .then(
            (genreUpdate) => {
                res.send(genreUpdate);
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                });
            }
        );
}



//Metodo para listar todos los generos
exports.getAll = (req, res) => {
    GenreModel.find()
        .then(
            (genres) => {
                res.send(genres);
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                });
            }
        )
}

//Metodo para listar un solo un genero por el id
exports.getOne = (req, res) => {
    GenreModel.findById(req.params.id)
        .then(
            (genres) => {
                res.send(genres);
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                });
            }
        );
}