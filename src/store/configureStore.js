// Dynamic module loading is not supported in ES6, using require
if ( process.env.NODE_ENV === 'production') {
	module.exports = require('./configureStore.prod');
} else {
	module.exports = require('./configureStore.dev');
}