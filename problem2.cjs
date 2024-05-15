/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

const fs = require('fs');

function readFile(filePath, callback){
    try {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              throw err;
            }
            return callback(data);
        });
    } catch (error) {
        console.log(`Error reading the file. ${error}`)
    }
}

function writeFile(){
    return{
        write(filePath, data, callback){
            try {
                fs.writeFile(filePath, data, (err) => {
                    if(err){
                        throw err;
                    }
                    if(callback){
                        callback();
                    }
                })
            } catch (error) {
                console.log(`Error writing to the file. ${error}`)
            }

        },
        append(filePath, data, callback){
            try {
                fs.appendFile(filePath, `${data}\n`, (err) => {
                    if(err){
                        throw err;
                    }
                    if(callback){
                        callback();
                    }
                })
            } catch (error) {
                console.log(`Error reading the file. ${error}`)
            }

        }
    }
}

function deleteFile(filePath){
    try {
        fs.unlink(filePath, (err) => {
            if(err){
                console.log(err);
            }
        })
    } catch (error) {
        console.log(`Error reading the file. ${error}`)
    }
}



module.exports = {
    readFile, writeFile, deleteFile
}