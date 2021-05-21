num = int(input())
arr = [1, 2, 3]
for i in range(num):
   c1, c2 = map(int, input().split())
   idx1, idx2 = arr.index(c1), arr.index(c2)
   arr[idx1], arr[idx2] = arr[idx2], arr[idx1]
print(arr[0])
