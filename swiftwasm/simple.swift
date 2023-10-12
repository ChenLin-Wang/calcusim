
func addtion(numbers: [Double]) -> Double {
    var result = 0
    for curNum in numbers {
        result += curNum
    }
    return result
}

func multiplication(numbers: [Double]) -> Double {
    var result = 0
    for curNum in numbers {
        result *= curNum
    }
    return result
}

print(addtion(numbers: [1, 2, 3, 4]))