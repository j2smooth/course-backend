const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

currentPath = path.resolve();
const filesDir = path.resolve(currentPath, 'files');
const zippedDir = path.resolve(currentPath, 'zipped');

const zipFile = path.join(zippedDir, 'text.zip');

if(!fs.existsSync(zippedDir)) {
    fs.mkdirSync(zippedDir);
}

let zipCommand = `zip ${zipFile} ${filesDir + path.sep}*` ;
console.log(zipCommand);

exec(zipCommand, (error, stdout, stderr) => {
    if (error){
        console.log('error', error.message)
    }
    if(stderr){
        console.log('stderr', stderr)
    }

    if(error || stderr) {
        return;
    }

    console.log(stdout);
});