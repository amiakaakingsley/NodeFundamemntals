const  _ = require('lodash');

const items = [1, [1, [2, [3, [4]]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
