from collections import Counter

n, m = map(int, input().split())
cnt = 0
arr = []
changed_arr = []
for i in range(n):
    arr.append(input())
result = ""

# 행열 뒤집기
for i in range(m):
    str = ""
    for j in range(n):
        str += arr[j][i]
    changed_arr.append(str)

# 제일 많이 등장하는 알파벳 result에 append
for i in range(m):
    counter = Counter(changed_arr[i])
    if 'A' in changed_arr[i] and 'C' in changed_arr[i]\
        and 'G' in changed_arr[i] and 'T' in changed_arr[i]:
        result += 'A'
    else:
        result += (max(changed_arr[i], key=counter.get))

for i in range(n):
    for j in range(m):
        if arr[i][j] != result[j]:
            cnt += 1
print(result)
print(cnt)