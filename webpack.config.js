//node引入模块语法
const path = require('path');

module.exports = {
    entry : './js/app.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js'
    }
}