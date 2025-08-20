from typing import Any

def search_for_target_index(array: list[Any], target: Any) -> int:
    for index, value in enumerate(array):
        if value == target:
            return index
    return -1

print(search_for_target_index(['apple', '3', 3], 3))