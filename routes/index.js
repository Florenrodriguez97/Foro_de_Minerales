var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();
const {index, glosario , top10 ,piedrasPreciosas,sobreNosotros, nuestrasRedes, busquedaDeMinerales} = require('../controllers/indexController')


/* GET home page. */
router.get('/', index); 

router.get('/glosario', glosario); 

router.get('/top10', top10); 

router.get('/piedrasPreciosas', piedrasPreciosas); 

router.get('/sobreNosotros', sobreNosotros); 

router.get('/nuestrasRedes', nuestrasRedes); 

router.get('/busquedaDeMinerales', busquedaDeMinerales)

module.exports = router;
