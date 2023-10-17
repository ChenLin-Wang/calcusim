#include <iostream>
#include <math.h>

using namespace std;

#ifdef TEST
#define EMSCRIPTEN_KEEPALIVE
void test();
#else
#include <emscripten/emscripten.h>
#endif


int main(int argc, char ** argv) {
    cout << "Simple calculation module initialized..." << endl;

    #ifdef TEST
    test();
    #endif

    return 0;
}

// Internal functions -------------------------------------------------------------

double trigonometric(double degree, bool isRadian, int type) {
    double input = degree;
    if (!isRadian) input = 2 * M_PI * degree / 360.0;

    switch (type) {
        case 1: return sin(input);
        case 2: return cos(input);
        case 3: return tan(input);
        default: return NAN;
    }
}

double arctrigonometric(double rate, bool outputRadian, int type) {
    double radian;
    switch (type) {
        case 1: radian = asin(rate); break;
        case 2: radian = acos(rate); break;
        case 3: radian = atan(rate); break;
        default: return NAN;
    }

    return (outputRadian) ? radian : (radian * 360 / (2 * M_PI));
}


// Export functions -------------------------------------------------------------

#ifdef __cplusplus
extern "C" {
#endif

// 1
double EMSCRIPTEN_KEEPALIVE addition(double nums[], int size) {
    double result = 0;
    for (int i = 0; i < size; i++) {
        double curNum = nums[i];
        result += curNum;
    }
    return result;
}

// 2
double EMSCRIPTEN_KEEPALIVE multiplication(double nums[], int size) {
    double result = 1;
    for (int i = 0; i < size; i++) {
        double curNum = nums[i];
        result *= curNum;
    }
    return result;
}

// trigonometric functions
#define TRIGONOMETRIC_FUNCTION(name, type) double EMSCRIPTEN_KEEPALIVE name(double degree, bool isRadian) { return trigonometric(degree, isRadian, type); }

TRIGONOMETRIC_FUNCTION(sine, 1)             // <- 3
TRIGONOMETRIC_FUNCTION(cosine, 2)           // <- 4
TRIGONOMETRIC_FUNCTION(tangle, 3)           // <- 5

#define ARCTRIGONOMETRIC_FUNCTION(name, type) double EMSCRIPTEN_KEEPALIVE name(double rate, bool outputRadian) { return arctrigonometric(rate, outputRadian, type); }

ARCTRIGONOMETRIC_FUNCTION(asine, 1)            // <- 6
ARCTRIGONOMETRIC_FUNCTION(acosine, 2)          // <- 7
ARCTRIGONOMETRIC_FUNCTION(atangle, 3)          // <- 8

// 9
double EMSCRIPTEN_KEEPALIVE exponentiation(double num, double times) { return pow(num, times); }

// 10
uint64_t EMSCRIPTEN_KEEPALIVE factorial(uint64_t num) { 
    uint64_t result = 1;
    for (uint64_t i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
 }

// 11
double EMSCRIPTEN_KEEPALIVE logarithm(double num, double base) { return log(num) / log(base); }

#ifdef __cplusplus
}
#endif



#ifdef TEST
// Tests -------------------------------------------------------------
void test() {

    while (true) {
        cout << 
            "-------------------------\n"
            "\t1. addition\n"
            "\t2. multiplication\n"
            "\t3. sine\n"
            "\t4. cosine\n"
            "\t5. tangle\n"
            "\t6. arcsine\n"
            "\t7. arccosine\n"
            "\t8. arctangle\n"
            "\t9. expnentiation\n"
            "\t10. factorial\n"
            "\t11. logarithm\n"
            "\t0. exit\n"
            "-------------------------\n"
            "test target: ";

        int i;
        cin >> i;

        switch (i) {
            case 0: return;

            case 1: 
            case 2: {
                double num1, num2, num3;
                cout << "num1: "; cin >> num1;
                cout << "num2: "; cin >> num2;
                cout << "num3: "; cin >> num3;
                double params[3] = {num1, num2, num3};
                if (i == 1) cout << addition(params, 3) << endl;
                else if (i == 2) cout << multiplication(params, 3) << endl;
                break;
            }

            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8: {
                bool isRadian;
                cout << "using radian or not: "; cin >> isRadian;
                double degree;
                cout << (isRadian ? "radian" : "degree") << ": "; cin >> degree;
                if (i == 3) cout << sine(degree, isRadian) << endl;
                if (i == 4) cout << cosine(degree, isRadian) << endl;
                if (i == 5) cout << tangle(degree, isRadian) << endl;
                if (i == 6) cout << asine(degree, isRadian) << endl;
                if (i == 7) cout << acosine(degree, isRadian) << endl;
                if (i == 8) cout << atangle(degree, isRadian) << endl;
                break;
            }

            case 9:
            case 11: {
                double num, num2;
                cout << "num: "; cin >> num;
                cout << ((i == 9) ? "times" : "base") << ": "; cin >> num2;
                cout << ((i == 9) ? exponentiation(num, num2) : logarithm(num, num2)) << endl;
                break;
            }

            case 10: {
                uint64_t num;
                cout << "num: "; cin >> num;
                cout << factorial(num) << endl;
                break;
            }
            
            default: break;
        }
    }
}
#endif