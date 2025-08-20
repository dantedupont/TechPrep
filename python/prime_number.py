def check_prime_number(num: int) -> bool:
    # 1. make a list of integers smaller than the number, but larger than 1
    smaller_ints: list[int] = []
    current: int = num - 1
    while current > 1:
        smaller_ints.append(current)
        current -= 1
    # 2. If the original number has a modulo 0 when divided by any num in that list, its not prime
    for integer in smaller_ints:
        if num % integer == 0:
            return False
    # 3. otherwise its prime
    return True

print(check_prime_number(59))