const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const models = require('./models/index')

const PORT = 3000;

app.use(bodyParser.json());


app.get('/', async (req, res) => {
     const getCountrys = await models.actor.findAll();
     res.json(getCountrys)
})

app.post('/categories', async (req, res) => {
  const { first_name, last_name } = req.body;
  const category = await models.actor.create({ first_name, last_name });
  res.status(200).json(category);
});


app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`))