"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
test('DeepPartial', function () {
    var foo = {};
    foo.SubItem = {
        NumProp: 3,
    };
    foo.SubItemArray = [{
            SubItemArray: [],
        }];
});
it('toKeyedObject', function () {
    expect(index_1.toKeyedObject(1, [])).toStrictEqual({});
    expect(index_1.toKeyedObject({}, ['a', 'b'])).toStrictEqual({ a: {}, b: {} });
});
//# sourceMappingURL=index.spec.js.map