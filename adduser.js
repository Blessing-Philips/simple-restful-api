/* const fs = require('fs');
// fs.readFile('readm.txt',function(err,data){
// console.log(data)
// })
function adduser (username,age){
    const dataStruc = {
        username : null,
        age:null
    }
    const data = fs.readFileSync('dtsource.json','utf-8');
    let newData = JSON.parse(data)
    console.log(newData)
    let prop = Object.create(dataStruc);
    prop.username = username
    prop.age = age
    newData.push(prop)
    // write 
    fs.writeFileSync('dtsource.json',JSON.stringify(newData) ); 
}
module.exports = {adduser}; */

const fs = require('fs');

function adduser(username, age) {
    const dataStruc = {
        username: null,
        age: null
    };

    const data = fs.readFileSync('datasource.json', 'utf-8');
    let newData = JSON.parse(data);

    let prop = Object.create(dataStruc);
    prop.username = username;
    prop.age = age;
    newData.push(prop);

    fs.writeFileSync('datasource.json', JSON.stringify(newData));

    console.log('Record added:', prop);

    return prop; // Return the added user if needed
}

module.exports = { adduser };
