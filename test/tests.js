//var json = JSON.parse('{"anArray":[1,2,3],"aBoolean":true,"aNull":null,"aNumber":123,"anObject":{"a":"b","c":"d","e":"f"},"aString":"Hello World"}');
//var foo = sparse(json);
//for (key in foo) {
//    console.log('entry:', key + ' => ' + foo[key])
//}
//
//var bar = {
//    anArray: [
//        1,
//        2,
//        3
//    ],
//    aFunc: function foo() {},
//    anUndefined: undefined,
//    aBoolean: true,
//    aNull: null,
//    aNumber: 123,
//    foo: {
//        "bar": "b",
//        "baz": "d",
//        "e": "f"
//    },
//    aString: "Hello World"
//};
//
//var baz = sparse(bar);
//
//for (key in baz) {
//    console.log('entry:', key + ' => ' + baz[key])
//}



var bar = {
    application: {
        ajax: {
            flag: true,
            number: 73
        },
        gui: {
            flag: false,
            number: 3.14159
        },
        properties: {
            flag: null,
            number: 0
        }
    }
};

var baz = sparse(bar);

for (key in baz) {
    console.log('entry:', key + ' => ' + baz[key])
}