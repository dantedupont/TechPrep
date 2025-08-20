def count_vowels(string: str) -> int:
    vowels: list[str] = ['a','e','i','o','u']
    count: int = 0
    for index, char in enumerate(string):
        if (char in vowels):
            count+=1
    return count

print(count_vowels('eunoia'))