#include <iostream>
#include <emscripten/emscripten.h>

using namespace std;

#ifdef __cplusplus
extern "C" {
#endif

double EMSCRIPTEN_KEEPALIVE addition(double nums[], int size) {
    double result = 0;
    for (int i = 0; i < size; i++) {
        double curNum = nums[i];
        printf("%f, size: %lu\n", curNum, sizeof(curNum));
        result += curNum;
    }
    printf("result: %f\n", result);
    return result;
}

double EMSCRIPTEN_KEEPALIVE multiplication(double nums[], int size) {
    double result = 1;
    for (int i = 0; i < size; i++) {
        double curNum = nums[i];
        printf("%f, size: %lu\n", curNum, sizeof(curNum));
        result *= curNum;
    }
    printf("result: %f\n", result);
    return result;
}

#ifdef __cplusplus
}
#endif

int main(int argc, char ** argv) {
    cout << "Simple calculation module initialized..." << endl;
    return 0;
}