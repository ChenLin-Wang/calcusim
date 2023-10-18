# Supported Operations

|      | Operators   | Done?   | Function in cpp_wasm                               | Cwrap Function                |
| ---- | ----------- | ------- | -------------------------------------------------- | -------------------------------------------------- |
| 1    | $+, -$      | ✅ | `double addition(double nums[], int size)`         | sum(array, number)     |
| 2    | $\times, ÷$ | ✅ | `double multiplication(double nums[], int size)`   | prod(array, number)    |
| 3    | $\sin$      | ✅ | `double sine(double degree, bool isRadian)`        | sin(number, number)    |
| 4    | $\cos$      | ✅ | `double cosine(double degree, bool isRadian)`      | cos(number, number)    |
| 5    | $\tan$      | ✅ | `double tangle(double degree, bool isRadian)`      | tan(number, number)    | 
| 6    | $\sin^{-1}$ | ✅ | `double asine(double degree, bool outputRadian)`   | asin(number, number)   |
| 7    | $\cos^{-1}$ | ✅ | `double acosine(double degree, bool outputRadian)` | acos(number, number)   |
| 8    | $\tan^{-1}$ | ✅ | `double atangle(double degree, bool outputRadian)` | atan(number, number)   |
| 9    | $x^y$       | ✅ | `double exponentiation(double num, double times)`  | exp(number, number)    |
| 10   | $x!$        | ✅ | `uint64_t factorial(uint64_t num)`                 | fac(number)            |
| 11   | $\log x$    | ✅ | `double logarithm(double num, double base)`        | log(number, number)    |
