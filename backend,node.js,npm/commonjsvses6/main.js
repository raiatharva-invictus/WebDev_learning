// const { createServer } = require('node:http'); // written in common js
// import http from "http" // written in es6

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//////////////////////////////////////////////////////////////////
// import {a} from "./example_fille_for_main.js"
// import {a, b, c, d} from "./example_fille_for_main.js"

// console.log(a);
// console.log(a,b,c,d);

// import atharva from "./example_fille_for_main.js" // this is example of default export which we can export by any name as seen

// console.log(atharva);

//let's see commonjs require too
/*
// (function (exports, require, module, __filename, __dirname){ // this is basically how module export looks like in common js this is just for illustration as this is done internally this is just a template to understand how we use __dirname, __filename even though we havent defined them this is why
//     //module code lives here
// })
*/
// const a = require("./example_fille_for_main.js")
// console.log(a, __dirname, __filename);

// we can also import module in html file like this :-

//       <script type="module" src="example_fille_for_main.js"></script>



