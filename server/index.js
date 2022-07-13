const express = require('express');
const steps = require('./steps');

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.post('/api/form', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  console.log(req.body.values);
  /*
   Сюда приходит объект с заполненными полями:
   {
     'kind-of-psychology': 'adult-psychology',
     university: 'Какой-то универ',
     speciality: 'Психолог',
     'experience-list': 'less-than-100'
   }
   Можно записывать эти значения в базу данных, например
  */

  const stepId = req.body.stepId || 'specialization';
  res.send(steps[stepId]);
});

app.listen(4001, () =>
  console.log('Express server is running on localhost:4001'),
);
