process.env.NODE_PATH = 'src';
require('module').Module._initPaths();

// only ES5 is allowed in this file
require('babel/register');

// other babel configuration, if necessary

// load your app
require('./main');
