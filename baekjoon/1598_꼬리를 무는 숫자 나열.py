num1, num2 = map(int, input().split())
num1, num2 = num1 - 1, num2 - 1
idx1 = [num1 // 4, num1 % 4]
idx2 = [num2 // 4, num2 % 4]
print(abs(idx1[0] - idx2[0]) + abs(idx1[1] - idx2[1]))
