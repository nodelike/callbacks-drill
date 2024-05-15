const fn = require("./../problem1.cjs")

fn.createRandomFiles(()=> {
    fn.deleteFiles();
})