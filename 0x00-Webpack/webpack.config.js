const path = require('path');

module.exports = {
  entry: './task_0/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'task_0/dist'),
  },
  mode: 'development',
};

