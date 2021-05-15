def prime(num):
    if num == 1:
        return False
    elif num == 2:
        return True
    for i in range(2, num):
        if num % i == 0:
            return False
    return True

num = int(input())
li = list(map(int, input().split()))
cnt = 0
for i in li:
    if prime(i) == True:
        cnt += 1
print(cnt)
