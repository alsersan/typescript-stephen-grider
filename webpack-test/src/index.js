//
// With CommonJS (output in common-js folder)
const message = require('./common-js/message');
//

//
// With ESModules (output in es-modules folder)
import message from './es-modules/message';
//

console.log(message);
