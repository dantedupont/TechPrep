def compute_factorial(number: int) -> int:
    if number == 0:
        return 1
    result: int = number
    while number > 1:
        result = result * (number - 1)
        number -= 1
    return result

print(compute_factorial(10))