def binary_search_recursive(array, target, start, end):
    if start > end:
        return None
    mid = (start + end) / 2
    if array[mid] == target:
        return mid
    elif array[mid] > target:
        return binary_search_recursive(array, target, start, end - 1)
    else:
        binary_search_recursive(array, target, mid + 1, end)

n, target = list(map(int, input().split()))
array = list(map(int, input().split()))

result = binary_search_recursive(array, target, 0, n - 1)
if result == None:
    print("원소가 존재 X")
else:
    print(result + 1)