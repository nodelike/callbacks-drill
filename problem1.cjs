/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

const fs = require('fs');
const path = require('path');

function createRandomFiles(callback){
    try {
        if(!path.join(__dirname, "problem-1-json")){
            fs.mkdirSync("problem-1-json")
        }
    
        for(let i = 0; i < 10; i++){
            const jsonFilePath = path.join(__dirname, "problem-1-json", `problem1-${i}.json`)
            fs.writeFile(jsonFilePath, JSON.stringify({id: i, filename: `problem1-${i}.json`}, null, 2), (err) => {
                if(err){
                    throw err;
                }
            })
        }
    
        console.log("Files created!");
        setTimeout(() => {
            callback();
        }, 1000);
    } catch (error) {
        console.log(`Error creating files: ${error}`);
    }

    
}

function deleteFiles(){
    try {
        for(let i = 0; i < 10; i++){
            const jsonFilePath = path.join(__dirname, "problem-1-json", `problem1-${i}.json`)
            fs.unlink(jsonFilePath, (error) => {
                if(error){
                    console.log(error);
                }
            })
        }

        console.log("Files deleted!");
    } catch (error) {
        console.log(`Error creating files: ${error}`); 
    }
}

module.exports = {
    createRandomFiles, deleteFiles
}