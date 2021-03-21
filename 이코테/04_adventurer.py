# 모험가 길드

num = int(input(""))
person = list(map(int, input("").split()))
person.sort()
result, cnt = 0
for p in person:
    cnt += 1
    if cnt >= p:
        result += 1
        cnt = 0
print(result)