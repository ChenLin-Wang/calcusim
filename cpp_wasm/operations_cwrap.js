var sum = () => { Module.cwrap('addition', 'number', ['array', 'number']); }
var prod = () => { Module.cwrap('multiplication', 'number', ['array', 'number']); }
var sin = () => { Module.cwrap('sine', 'number', ['number', 'bool']); }
var cos = () => { Module.cwrap('cosine', 'number', ['number', 'bool']); }
var tan = () => { Module.cwrap('tangle', 'number', ['number', 'bool']); }
var asin = () => { Module.cwrap('asine', 'number', ['number', 'bool']); }
var acos = () => { Module.cwrap('acosine', 'number', ['number', 'bool']); }
var atan = () => { Module.cwrap('atangle', 'number', ['number', 'bool']); }
var exp = () => { Module.cwrap('exponentiation', ['number', 'number']); }
var fac = () => { Module.cwrap('factorial', ['number']); }
var log = () => { Module.cwrap('logarithm', ['number', 'number']); }

var toTypedArray_Double = function(arr) {
    var buf = new ArrayBuffer(arr.length * 8);
    var i8 = new Uint8Array(buf);
    var i64 = new Float64Array(buf);
    arr.forEach((i, index) => { i64[index] = i; });
    return i8;
}