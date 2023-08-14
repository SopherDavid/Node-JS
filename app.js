//1.1
// import fs from 'fs';
// import _ from 'lodash';

// export function readTextFile(filename){
//     fs.readFile(filename,'utf-8',(err, data) => {
//         if (err) throw Error;
//         console.log(data);

//     })
// }

// readTextFile('./randomText.txt');

//1.2
// import fs from 'fs';
// import _ from 'lodash';

// export function readTextFile(filename){
//     fs.readFile(filename,'utf-8',(err, data) => {
//         if (err) throw Error;
//         console.log(data);
//         console.log(_.words(data).length)

//     })
// }

// readTextFile('./randomText.txt');


// 1.3
// import fs from 'fs';
// import _ from 'lodash';
// import { promisify } from 'util';
// const readFileAsync = promisify(fs.readFile);
// async function returnFile() {
//     try {
//         const textData = await readFileAsync('randomText.txt', 'utf8');
//         return textData;
//     } catch (err) {
//         throw err;
//     }
// }
// async function rev() {
//     try {
//         const textData = await returnFile();
//         console.log(_.words(textData).reverse().toString())

    
//     } catch (error) {
//         console.error(error);
//     }
// }
 
// rev()

// 1.4
// import fs from 'fs';
// import _ from 'lodash';
// import { promisify } from 'util';
// const readFileAsync = promisify(fs.readFile);
// async function returnFile() {
//     try {
//         const textData = await readFileAsync('randomText.txt', 'utf8');
//         return textData;
//     } catch (err) {
//         throw err;
//     }
// }
// async function rev() {
//     try {
//         const textData = await returnFile();
//         console.log(_.uniq(_.words(textData)).length)

    
//     } catch (error) {
//         console.error(error);
//     }
// }
 
// rev()

// //1.5
// import fs from 'fs';
// import _ from 'lodash';
// import { promisify } from 'util';
// const readFileAsync = promisify(fs.readFile);
// async function returnFile() {
//     try {
//         const textData = await readFileAsync('randomText.txt', 'utf8');
//         return textData;
//     } catch (err) {
//         throw err;
//     }
// }
// async function rev() {
//     try {
//         const textData = await returnFile();
//         console.log(_.uniq(_.words(textData)).length)

    
//     } catch (error) {
//         console.error(error);
//     }
// }
 
// rev()

// //1.6
// import fs from 'fs';
// import _ from 'lodash';
// import { promisify } from 'util';
// const readFileAsync = promisify(fs.readFile);
// async function returnFile() {
//     try {
//         const textData = await readFileAsync('randomText.txt', 'utf8');
//         return textData;
//     } catch (err) {
//         throw err;
//     }
// }
// async function rev() {
//     try {
//         const textData = await returnFile();
//         console.log(_.toUpper(_.uniq(_.words(textData))))

    
//     } catch (error) {
//         console.error(error);
//     }
// }
 
// rev()


//1.7
import fs from 'fs';
import _ from 'lodash';
import { promisify } from 'util';
const readFileAsync = promisify(fs.readFile);
async function returnFile() {
    try {
        const textData = await readFileAsync('randomText.txt', 'utf8');
        return textData;
    } catch (err) {
        throw err;
    }
}
async function rev() {
    try {
        const textData = await returnFile();
        const grater = _.gt(5)
        console.log((_.toUpper(_.uniq(_.words(grater)))))
    
        // for (words in textData, word < textData.length, word++) {
        //     if (i < 5) {
        //         console.log((_.toUpper(_.uniq(textData))))
        //     }
        // }

    
    } catch (error) {
        console.error(error);
    }
}
 
rev()
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/SopherDavid/Node-JS.git
git push -u origin main