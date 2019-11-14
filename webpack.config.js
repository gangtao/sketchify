const path = require('path');

const config = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'sketchify.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
        }],
    }
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.output.filename = 'sketchify.js';
  }

  return config;
};