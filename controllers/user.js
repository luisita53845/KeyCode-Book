const UserModel = require('../models/user');
const service = require('../services/index')


/**
 * Metodo para almacenar un nuevo usuario
 * @param {*} req => Todo lo que enviamos desde el body (formulario)
 * @param {*} res => La respuesta que se devolvera
 */
exports.create = (req, res) => {
    /**
     * El signo ! antes de la condicion significa que lña estamos negando
     * Validamos que todos los campos del formulario esten llenos
     */


    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        });
    }

    const user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        birthDate: req.body.birthDate,
        age: req.body.age
    });

    user.save()
        .then((dataUser) => { res.send(dataUser) })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}


/**
 * Metodo para actualizar un usuario
 * @param {*} req => Todo lo que enviamos desde el body (formulario)
 * @param {*} res => La respuesta que se devolvera
 */
exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        });
    }

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        birthDate: req.body.birthDate,
        age: req.body.age
    }

    UserModel.findByIdAndUpdate(req.params.id, user)
        .then(
            (userUpdate) => {
                res.send(userUpdate);
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                });
            }
        );
}

//Metodo para listar todos los usuarios
exports.getAll = (req, res) => {
    UserModel.find()
        .then(
            (users) => {
                res.send(users)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                });
            }
        )
}

//Metodo para obtener un solo usuario por el id
exports.getOne = (req, res) => {
    UserModel.findById(req.params.id)
        .then(
            (users) => {
                res.send(users)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                });
            }
        )
}

//Metodo para eliminar solo un usuario por el id
exports.deleteOne = (req, res) => {
    UserModel.findByIdAndRemove(req.params.id)
        .then(
            (users) => {
                res.send(users)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                });
            }
        )
}

exports.login = (req, res) => {
    UserModel.findOne({ email: req.body.email },
        (error, dataUser) => {
            if (dataUser != null) {
                if (dataUser.password == req.body.password) {
                    res.send({ token: service.createToken(dataUser) })
                } else {
                    res.status(400).send({
                        message: 'Los datos no coinciden'
                    })
                }
            } else {
                res.status(400).send({
                    message: 'Los datos no coinciden'
                })
            }
        }
    )
}