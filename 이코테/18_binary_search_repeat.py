def binary_search_repeat(array, target, start, end):
    while start <= end:
        mid = (start + end) / 2
        if array[mid] == target:
            return mid
        elif array[mid] > target:
            end = mid - 1
        else:
            end = mid + 1
    return None

n, target = list(map(int, input().split()))
array = list(map(int, input().split()))

result = binary_search_repeat(array, target, 0, n - 1)
if result == None:
    print("원소가 존재 X")
else:
    print(result + 1)