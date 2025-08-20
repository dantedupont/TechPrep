from typing import Any

def remove_duplicates(array: list[Any]) -> list[Any]:
    unique_list: list[Any] = []
    for value in array:
        if value not in unique_list:
            unique_list.append(value)
    return unique_list


print(remove_duplicates([1,1,1,1,1,1,2,3,3,4]))