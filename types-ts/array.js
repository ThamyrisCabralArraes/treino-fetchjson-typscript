var array1 = ['aaa', 'bbbb'];
var array2 = [new Date(), new Date()];
// array de arrays
var array3 = [['aaa'], ['bbb']];
// array com objeto
var array4 = [{ a: 1, b: 2 }];
// map
array1.map(function (item) {
    return item.length;
});
var array5 = ['idade', 30];
var mapDaArray5 = array5.map(function (item) {
    return "Resultado ".concat(item);
});
//tuple
var array6 = ['aaa', 10, true];
var array7 = ['aaa', 1, true];
var array8 = ['bbb', 2, false];
var array9 = ['ccc', 3, true];
