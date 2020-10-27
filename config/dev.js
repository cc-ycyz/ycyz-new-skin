// let proj = process.argv[2].split('/');
// console.log(proj,'proj')

// let projectName = proj[0];
// let projectVersion = proj[1] || 1;
// console.log(process.argv,'argv');

// console.log(projectVersion,'projectVersion')


let fs = require('fs')

fs.writeFileSync('./config/project.js', `exports.name = '${process.argv[2]}'`)

let exec = require('child_process').execSync;
exec('npm run serve', {stdio: 'inherit'});

