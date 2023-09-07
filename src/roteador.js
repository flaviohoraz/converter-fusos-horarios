const express = require('express');
const converterFusoHorario = require('./controladores/fusoshorarios');

const rotas = express();

rotas.get('/', converterFusoHorario);

module.exports = rotas;