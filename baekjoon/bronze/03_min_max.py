# 10818번
# N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

# 내가 짠 코드
cnt = int(input(""))
arr = input("").split()
arr = list(map(int, arr))
print(min(arr), max(arr))

# 다른 사람의 코드
a = int(input())
b = list(map(int, input().split()))
print("{} {}".format(min(b), max(b)))