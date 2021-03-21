# 2501번
# 두 개의 자연수 N과 K가 주어졌을 때, N의 약수들 중 K번째로 작은 수를 출력하는 프로그램을 작성하시오.

# 내가 짠 코드
arr = []
num1, num2 = map(int, input("").split())
for i in range(1, num1 + 1):
    if num1 % i == 0:
        arr.append(i)
arr.sort()
if len(arr) < num2:
    print(0)
else:
    print(arr[num2 - 1])
    
# 다른 사람의 코드
arr=[]
N, K = map(int, input().split())
cnt = 0
for i in range(1, N + 1):
    if N % i == 0:
        arr.append(i)
    cnt += 1

if K > len(arr):
    print(0)
else:
    print(arr[K-1])