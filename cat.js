const fs = require('fs')


module.exports = (done) => fs.readFile('bash.js','utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
  });