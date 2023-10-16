# Supported Operations

|      | Operators   | Done?   | Function in cpp_wasm                               |
| ---- | ----------- | ------- | -------------------------------------------------- |
| 1    | $+, -$      | ✅ | `double addition(double nums[], int size)`         |
| 2    | $\times, ÷$ | ✅ | `double multiplication(double nums[], int size)`   |
| 3    | $\sin$      | ✅ | `double sine(double degree, bool isRadian)`        |
| 4    | $\cos$      | ✅ | `double cosine(double degree, bool isRadian)`      |
| 5    | $\tan$      | ✅ | `double tangle(double degree, bool isRadian)`      |
| 6    | $\sin^{-1}$ | ✅ | `double asine(double degree, bool outputRadian)`   |
| 7    | $\cos^{-1}$ | ✅ | `double acosine(double degree, bool outputRadian)` |
| 8    | $\tan^{-1}$ | ✅ | `double atangle(double degree, bool outputRadian)` |
| 9    | $x^y$       | ✅ | `double exponentiation(double num, double times)`  |
| 10   | $x!$        | ✅ | `uint64_t factorial(uint64_t num)`                 |
| 11   | $\log x$    | ✅ | `double logarithm(double num, double base)`        |