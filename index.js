const express = require('express');

const app = express();

const models = require('./models/index')

const PORT = 3000;


app.get('/', async (req, res) => {
     const getCountrys = await models.actor.findAll();
     res.json(getCountrys)
})

app.post('/categories', async (req, res) => {
  const { name } = req.body;
  const category = await models.actor.create({ name });
  res.status(200).json(category);
});


app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`))