"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = require("ramda");
function dump(v) {
    console.log(v);
    return v;
}
exports.dump = dump;
/**
 * Create an object with specified keys, with the same value.
 */
function toKeyedObject(v, keys) {
    return ramda_1.zipObj(keys, ramda_1.repeat(v, keys.length));
}
exports.toKeyedObject = toKeyedObject;
//# sourceMappingURL=index.js.map