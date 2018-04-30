// webpack.config.js runs in node.js and is ran by calling `yarn run build`

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'rmc.js'
    }
};
