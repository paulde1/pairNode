let catFile = require('./cat')
let lsFile = require('./ls')
let pwdFile = require('./pwd')



process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  function done(output) {
    process.stdout.write(output)
    process.stdout.write('\nprompt > ');
  
  }
  
    let  cmd = data.toString().trim();
    let args = cmd.split(' ')[1]
    cmd = cmd.split(' ')[0]
 
    process.stdout.write('You typed: ' + cmd)
    process.stdout.write('\nprompt > ');
    lsFile()
    pwdFile()
    catFile(args)
})


// const pwd = require('./pwd.js')
// pwd();

// const ls = require('./ls.js');
// ls();



// const cat = require('./cat.js');
// cat();














// process.stdout.write('prompt >');
// process.stdin.on('data', (data) => {
//     const  cmd = data.toString().trim();
//     process.stdout.write('You typed: ' + cmd)
//     process.stdout.write('\nprompt > ');
// })

// process.stdout.write('prompt > ');

// process.stdin.on('data', (data) => {
//     // const cmd = data.toString().trim();

//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\nprompt > ');
// });


// const done = (output) => {
//     // show the output
//     // show the prompt
//   };

// const pwd = require('./pwd.js')
// pwd();

// const ls = require('./ls.js');
// ls();



// const cat = require('./cat.js');
// cat();
