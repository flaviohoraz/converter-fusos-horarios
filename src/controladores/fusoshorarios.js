const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz');

const converterFusoHorario = async (req, res) => {
    const { data, origem, destino } = req.body;
    const padraoData = 'dd/MM/yyyy HH:mm:ss:SSS \'GMT\' XXX (z)';
    const link = 'https://en.wikipedia.org/wiki/List_of_tz_database_time_zones';

    if (!data || data === "") {
        return res.status(400).json(`Data não informada ou inválida. Usar o formato yyyy-MM-dd HH:mm:ss.SSS`);
    } else if (!origem || origem === "") {
        return res.status(400).json(`Origem não informada ou inválida. Usar um Identificador Time Zone (TZ identifier), ex.: America/Bahia. ${link}`);
    } else if (!destino || destino === "") {
        return res.status(400).json(`Destino não informado ou inválido. Usar um Identificador Time Zone (TZ identifier), ex.: America/Sao_Paulo. ${link}`);
    }

    try {
        const dataUtc = zonedTimeToUtc(data, origem);
        const dataUtcLocalDestino = utcToZonedTime(dataUtc, destino);
        const dataLocalDestino = format(dataUtcLocalDestino, padraoData, { timeZone: destino });
        return res.status(200).json(dataLocalDestino);
    } catch (erro) {
        return res.status(400).json(`Ocorreu um erro: ${erro.message}`);
    }
};

module.exports = converterFusoHorario;