# Supported Operations

|      | Operators   | Done? | Function in cpp_wasm                               |
| ---- | ----------- | ----- | -------------------------------------------------- |
| 1    | $+, -$      | Y     | `double addition(double nums[], int size)`         |
| 2    | $\times, ÷$ | Y     | `double multiplication(double nums[], int size)`   |
| 3    | $\sin$      | Y     | `double sine(double degree, bool isRadian)`        |
| 4    | $\cos$      | Y     | `double cosine(double degree, bool isRadian)`      |
| 5    | $\tan$      | Y     | `double tangle(double degree, bool isRadian)`      |
| 6    | $\sin^{-1}$ | Y     | `double asine(double degree, bool outputRadian)`   |
| 7    | $\cos^{-1}$ | Y     | `double acosine(double degree, bool outputRadian)` |
| 8    | $\tan^{-1}$ | Y     | `double atangle(double degree, bool outputRadian)` |
| 9    | $x^y$       | Y     | `double exponentiation(double num, double times)`  |
| 10   | $x!$        | Y     | `uint64_t factorial(uint64_t num)`                 |
| 11   | $\log x$    | Y     | `double logarithm(double num, double base)`        |