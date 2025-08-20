def find_two_for_target_sum(array: list[int], target:int) -> list[int] | str:
    result: list[int] = []
    for i in range(len(array)):
        for j in range(i + 1, len(array)):
            if array[i] + array[j] == target:
                result.append(array[i])
                result.append(array[j])
    if not result:
        return "No pair found"
    return result

print(find_two_for_target_sum([1,2,3,4,5], 6))
