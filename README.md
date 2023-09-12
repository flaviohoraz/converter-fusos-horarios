# converter-fusos-horarios
## Descrição
API para conversão de data local de um fuso horário qualquer para um fuso horário distinto.

## Requisitos obrigatórios
Serão utilizadas as funções *zonedTimeToUtc*, *utcToZonedTime* e *format* da biblioteca **date-fns**, que pode ser baixada no NPM e encontrada no link abaixo:

https://www.npmjs.com/package/data-fns

## Endpoints
A API possui rota única, que deverá retornar a data convertida para o fuso informado.

```javascript
// GET /fuso-horario
```
**Requisição** - O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

-	data
-	origem
-	destino

### Observações:

• A *data* deverá ser informada no padrão **yyyy-MM-dd HH:mm:ss.SSS**
• A *origem* deverá ser informada como Identificador Time Zone (**TZ identifier**), exemplo ***Europe/Berlin***
• O *destino* deverá ser informado como Identificador Time Zone (**TZ identifier**), exemplo ***America/Bahia***
• A relação de **TZ identifier** pode ser conferida em https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

**Resposta** - A seguir, detalhamento das possíveis respostas:

1. Em caso de **sucesso**, será retornado um ***status code*** 200 e enviado, no corpo (body), um objeto com uma propriedade *Data equivalente* com a resposta.

2. Em caso de **falha na validação**, a resposta terá um ***status code apropriado*** e, em seu corpo (body), um objeto com uma propriedade *mensagem* que terá como valor um texto explicando o motivo da falha.

### Exemplo de Requisição
```javascript
// GET /fuso-horario
{
	"data": "2018-03-01 13:23:25",
	"origem": "Europe/Berlin",
	"destino": "America/Sao_Paulo"
}
```

### Exemplo de Resposta de Sucesso
```javascript
// HTTP Status 200
{
	"Data equivalente": "01/03/2018 09:23:25:000 GMT -03:00 (BRT)"
}
```

### Exemplo de Resposta de Falha na validação
```javascript
// HTTP Status 400
{
"mensagem": "Data não informada ou inválida. Usar o formato yyyy-MM-dd HH:mm:ss.SSS"
}

{
"mensagem":" Origem não informada ou inválida. Usar um Identificador Time Zone (TZ identifier), ex.: America/Bahia."
}
```