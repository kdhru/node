// const http = require('http');

// const myserver = http.createServer((req, res) => {

//     res.writeHead(200, { "Content-Type": "text/html" });

//     if (req.url == '/') {
//         res.end('<h1>ABES COLLEGE</h1>');
//     }
//     else if (req.url == '/about') {
//         res.end('<img src="https://www.abes.ac.in/assets/2.jpg" width="500">');
//     }
//     else if (req.url == '/contact') {
//         res.end('<h1>Address. 19th KM Stone. NH-09 Ghaziabad (UP). PIN - 201009</h1>');
//     }
//     else {
//         res.end('404 Page Not Found');
//     }
// });

// myserver.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });




const fs = require('fs');

// fs.writeFile('read.txt', 'Welcome to my channel',()=>{});
//  const result=fs.readFileSync('read.txt','utf-8');
//  console.log(result);
// fs.readFile('read.txt','Welcome to my channel',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

fs.appendFile('read.txt',` abes college is good`,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Data appended successfully');
    }
});