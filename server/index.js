const express = require('express')
const cors = require('cors');
const fs = require("fs");
const path = require('path');
const app = express()
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
  let data = fs.readFileSync(path.resolve(__dirname, 'db.json'));
  return res.send(data);
})

app.get('/price/:gte', (req, res) => {
  // currently this filters by minimum price so
  // localhost:5000/price/100
  // returns all cats that cost more than 100
  // I guess if I were expanding this, I would add rules using queryStrings
  // something like localhost:5000/price/100?filter=gte would be the filter for greater than
  // and localhost:5000/price/100?filter=lte would be the filter for less than
  // I'd add a check below for filter keynames, and update the filter logic to use that
  let data = fs.readFileSync(path.resolve(__dirname, 'db.json'));
  data = JSON.parse(data)
  const greaterThanAmount = parseFloat(req.params.gte);
  const filteredData = data.filter(cat => {
    let catPrice = parseFloat(cat.price);
    return catPrice > greaterThanAmount;
  })
  res.send(JSON.stringify(filteredData))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})