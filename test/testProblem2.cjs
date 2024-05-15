const { readFile, writeFile, deleteFile } = require("./../problem2.cjs");
const path = require("path")

const filePath = path.join(__dirname, "lipsum_1.txt")
// 1.
readFile(filePath, (data) => {
    // 2.
    const upperFilename = "lipsum-upper.txt";
    const upperData = data.toUpperCase();
    writeFile().write(upperFilename, upperData, () => {
        writeFile().append("filenames.txt", upperFilename);

        // 3. 
        readFile(upperFilename, (data) => {
            const lowerData = data.toLowerCase();
            const splitData = lowerData.split('\n');

            const splitFilename = "lipsum-split.txt";
            splitData.forEach(element => {
                writeFile().append(splitFilename, element)
            });
            writeFile().append("filenames.txt", splitFilename, () => {
                
                // 4.
                readFile(upperFilename, (data1) => {
                    readFile(splitFilename, (data2) => {
                        const combinedData = data1 + '\n' + data2;
                        const sortedData = combinedData.split('\n').sort().join('\n');
                        
                        const sortedFilename = "lipsum-sorted.txt";
                        writeFile().write(sortedFilename, sortedData, () => {
                            writeFile().append("filenames.txt", sortedFilename, () => {
                                
                                //5.
                                readFile("filenames.txt", (data) => {
                                    let fileNames = data.split("\n")
                                    for(let file of fileNames){
                                        if(file != ""){
                                            deleteFile(file)
                                        };
                                    }
                                })
                            });

                            
                        });
                    });
                });
            });
        });
    });
});