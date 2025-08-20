from typing import Any

def find_values_in_common(first_array: list[Any], second_array: list[Any]) -> list[Any]:
    common_values: list[Any] = []
    for item in first_array:
        if item in second_array:
            common_values.append(item)
    return common_values

print(find_values_in_common([1,5,'tree', 7,2.6, ['a', 'b']], [45,12,'test', [1],2.6]))