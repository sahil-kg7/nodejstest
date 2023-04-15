const path = require('path');

console.log(path.join(__dirname, 'server', 'index.html'));
console.log(path.basename(path.join(__dirname, 'server', 'index.html')));

const absolute = path.resolve(__filename);
console.log(absolute);