def find_largest_number(array: list[int]) -> int:
    largest:int = array[0]
    for i in range(len(array)):
        if array[i] > largest:
            largest = array[i]
    return largest

print(find_largest_number([100,10,500,-1]))