// General webpack settings will be located on this file
const webpack = require('webpack');
//The path function initializes the path module that will allow finding and interaction of file paths.
const path = require('path');

//The module.exports instruct node.js to export specified codes from a given file so that it is accesed by another file.
//The entry refers to the starting point of webpack transpiling/bundling process.

module.exports = {  //webpack will take source code from ./src folder index.js and transpile it to bundle.js in the dist folder
    entry:[
        'react-hot-loader/patch',
        './src/index.js' //Add index.js as the entry point of bundling
    ],
output:{
path: path.resolve(__dirname,'dist'),
filename: 'bundle.js', //script to bundle the contents of index.js to bundle.js
},
module:{
rules:[
{
    test: /\.css$/i,
    use: ["css-loader"], //configure css and its loader to work on webpack
use:'babel-loader',//configure babel to convert/transpile JSX code into a browser readable js format
exclude: /node_modules/  //rule to exclude node_modules when bundling
}
]
},
 devServer:{
        'static':{
            directory:'./dist',
        },
        hot:true
    },
};
