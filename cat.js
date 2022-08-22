const fs = require('fs')


module.exports = (fileName) => fs.readFile(fileName,'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
  });


  // module.exports ={
  //   cat : function (`${file)}`{ 
  //      const fs = require('fs')
  //      fs.readFile(`${file}`,'utf8', function (err, data) {
  //      if (err) {
  //       throw err;
  //      }
  //      console.log(data);
  //    })
  //  }
  //  }