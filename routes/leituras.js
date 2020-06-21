var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Leitura = require('../models').Leitura;

// tempo real (último valor de cada leitura)
router.get('/pokemon', function (req, res, next) {

	console.log(`Recuperando a última leitura`);

	const instrucaoSql = `select idPoke from favoritos where fkUsuario = 2 order by idpoke;`;

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});

});

function hoje(){
	const momento1 = new Date();
	return `${momento1.getFullYear()}-${(momento1.getMonth()+1).toString().padStart(2,'0')}-${momento1.getDate().toString().padStart(2,'0')}`;
}
module.exports = router;
