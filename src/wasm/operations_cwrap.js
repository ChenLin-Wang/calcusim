var sum = (nums, size) => { return Module.cwrap('addition', 'number', ['array', 'number'])(nums, size); }
var prod = (nums, size) => { return Module.cwrap('multiplication', 'number', ['array', 'number'])(nums, size); }
var sin = (degree, isRadian) => { return Module.cwrap('sine', 'number', ['number', 'number'])(degree, isRadian); }
var cos = (degree, isRadian) => { return Module.cwrap('cosine', 'number', ['number', 'number'])(degree, isRadian); }
var tan = (degree, isRadian) => { return Module.cwrap('tangle', 'number', ['number', 'number'])(degree, isRadian); }
var asin = (rate, outputRadian) => { return Module.cwrap('asine', 'number', ['number', 'number'])(rate, outputRadian); }
var acos = (rate, outputRadian) => { return Module.cwrap('acosine', 'number', ['number', 'number'])(rate, outputRadian); }
var atan = (rate, outputRadian) => { return Module.cwrap('atangle', 'number', ['number', 'number'])(rate, outputRadian); }
var exp = (num, times) => { return Module.cwrap('exponentiation', ['number', 'number'])(num, times); }
var fac = (num) => { return Module.cwrap('factorial', ['number'])(num); }
var log = (num, base) => { return Module.cwrap('logarithm', ['number', 'number'])(num, base); }
var pi = () => { return Module.ccall('mathPi', 'number', null, null); }
var eExp = (times) => { return Module.cwrap('e_exponentiation', ['number'])(times); }

var toTypedArray_Double = function(arr) {
    var buf = new ArrayBuffer(arr.length * 8);
    var i8 = new Uint8Array(buf);
    var i64 = new Float64Array(buf);
    arr.forEach((i, index) => { i64[index] = i; });
    return i8;
}