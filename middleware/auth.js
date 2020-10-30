const service = require('../services/index')
    /**
     * 
     * @param {*} req => Todos los parametros que se reciben
     * @param {*} res =>Respuesta que se Devuelven
     * @param {*} next =>Middleware, si todo sale bien, se ejecuta el metodo que necesitamos que se jecute 
     */
exports.auth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(400).send({
            messege: 'No tienes permiso para realizar esta Operacion'
        });

    }

    const token = req.headers.authorization.split(' ')[1]

    service.decodeToken(token)
        .then(
            (respon) => {
                req.user = respon
                next()
            }
        )
        .catch(
            (error) => {
                res.status(error.status).send({
                    messege: error.messege
                });
            }
        );
}