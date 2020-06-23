var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;

// tempo real (último valor de cada leitura)
router.get('/pokemon', function (req, res, next) {
	
	var id = req.query.id;

	console.log(`Recuperando a última leitura`);

	const instrucaoSql = `select idPoke from favoritos where fkUsuario = ${id} order by idpoke;`;

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});

});
module.exports = router;
