const express = require('express');
const converterFusoHorario = require('./controladores/fusoshorarios');

const rotas = express();

rotas.get('/fuso-horario', converterFusoHorario);

module.exports = rotas;