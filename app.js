const express = require('express');
const app = express();
var fs = require('fs');

app.use(express.json());

const data = [{ name: 'john', age: '45' }];
app.get('/data', (req, res, next) => {
  res.json(data);
});

app.post('/data', function(req, res) {
  const newData = req.body;

  fs.writeFile('file.txt', JSON.stringify(newData), function(err) {
    if (err) throw err;
    console.log('Replaced!');
  });
  res.send(newData);
});
app.listen(3005, () => {
  console.log('Server running on port 3005');
});
