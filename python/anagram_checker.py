def check_if_anagram(first_string: str, second_string: str) -> bool:
    # 1. Turn strings into arrays
    first_array: list[str] = list(first_string.replace(" ", ""))
    second_array: list[str] = list(second_string.replace(" ", ""))
    # 2. Sort arrays 
    first_array.sort()
    second_array.sort()
    # 3. If they are the same then the strings are anagrams 
    if first_array == second_array:
        return True
    return False

print(check_if_anagram("yes", "se y"))