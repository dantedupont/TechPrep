def palindrome(string: str) -> bool:
    if (string == string[::-1]):
        return True
    else:
        return False
    

print(palindrome('racecar'))