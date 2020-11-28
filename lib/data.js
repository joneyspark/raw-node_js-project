//dependencies

const fs = require('fs');
const path = require('path');

const lib = {};

// base directory of the data folder

lib.basedir = path.join(__dirname, '/../.data/');

// write data to file

lib.create = (dir, file, data, callback) => {
    // open file for writing
    fs.open(lib.basedir + dir + '/' + file + '.json', 'wx', (err, fileDescriptior) =>{
        if( !err && fileDescriptior) {
            //convert data to string
            const stringData = JSON.stringify(data);

            //write data to file and then close it
            fs.writeFile(fileDescriptior, stringData, (err2) => {
                if(!err2) {
                    fs.close(fileDescriptior, (err3) => {
                        if(!err3) {
                            callback(false);
                        } else {
                            callback('Error closing the new file!');
                        }
                    });
                } else {
                    callback('Error writing to new file');
                }
            })
        } else {
            callback('Could not create new file, it may already exists!');
        }
    });
}

// read data from file

lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir+dir}/${file}.json`, 'utf8', (err4, data) => {
        callback(err4, data);
    })
}

// update existing file
lib.update = (dir, file, data, callback) => {
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err, fileDescriptior) => {
        if(!err && fileDescriptior) {
            // convert data to string

            const stringData = JSON.stringify(data);

            //truncate the file
            fs.ftruncate(fileDescriptior, (err1) => {
                if(!err1) {
                    // write to the file and close it
                    fs.writeFile(fileDescriptior, stringData, (err2) => {
                        if(!err2) {
                            //close the file
                            fs.close(fileDescriptior, (err3) => {
                                if(!err3) {
                                    callback(false);
                                } else {
                                    callback('Error closing file!');
                                }
                            });
                        } else {
                            callback('Error writing to file!')
                        }
                    });
                } else {
                    callback('Error truncating file!');
                }
            })
        } else {
            console.log(`Error updating. File may not exists.`)
        }
    })
}

//delete existing file
lib.delete = (dir, file, callback) => {
    //unlink file
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
        if(!err) {
            callback(false);
        } else {
            callback('Error deleting file');
        }
    })
}

module.exports = lib;