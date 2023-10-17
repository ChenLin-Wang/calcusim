var sum = () => { return Module.cwrap('addition', 'number', ['array', 'number']); }
var prod = () => { return Module.cwrap('multiplication', 'number', ['array', 'number']); }
var sin = () => { return Module.cwrap('sine', 'number', ['number', 'number']); }
var cos = () => { return Module.cwrap('cosine', 'number', ['number', 'number']); }
var tan = () => { return Module.cwrap('tangle', 'number', ['number', 'number']); }
var asin = () => { return Module.cwrap('asine', 'number', ['number', 'number']); }
var acos = () => { return Module.cwrap('acosine', 'number', ['number', 'number']); }
var atan = () => { return Module.cwrap('atangle', 'number', ['number', 'number']); }
var exp = () => { return Module.cwrap('exponentiation', ['number', 'number']); }
var fac = () => { return Module.cwrap('factorial', ['number']); }
var log = () => { return Module.cwrap('logarithm', ['number', 'number']); }

var toTypedArray_Double = function(arr) {
    var buf = new ArrayBuffer(arr.length * 8);
    var i8 = new Uint8Array(buf);
    var i64 = new Float64Array(buf);
    arr.forEach((i, index) => { i64[index] = i; });
    return i8;
}