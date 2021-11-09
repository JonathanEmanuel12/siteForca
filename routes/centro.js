var express = require('express');


var router = express.Router();
const palavraControle = require('../controle/PalavrasControle');

/* GET users listing. */
router.get('/:nivel', function(req, res, next) {

  res.render('centro', { value: req.params.nivel });
});

router.get('/dica', (req, res) => {
  res.json({aviso: "ainda não tem"});
});
router.get('/palavra/:nivel', async(req, res) => {
  const palavras = await palavraControle.getPalavras(req.params.nivel);
  res.json(palavras);
});


module.exports = router;

  