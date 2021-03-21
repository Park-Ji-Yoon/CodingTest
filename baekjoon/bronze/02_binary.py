# 3460번
# 양의 정수 n이 주어졌을 때, 이를 이진수로 나타냈을 때 1의 위치를 모두 찾는 프로그램을 작성하시오.
# 이진수는 뒤에서부터 읽는다

# 내가 짠 코드
cnt = int(input(""))
nums = []
for i in range(cnt):
    nums.append(int(input("")))
for n in nums:
    arr = list(bin(n))
    arr.remove('0')
    arr.remove('b')
    for j in range(0, len(arr)):
        if arr[-1-j] == '1':
            print(j, end=" ")
            
# 다른 사람의 코드
T = int(input())
for _ in range(T):
   N = bin(int(input()))[2:]
   for i in range(len(N)):
       if N[-i-1] == '1':
           print(i, end = ' ')