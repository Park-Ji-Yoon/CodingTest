n = int(input())
result = []
for i in range(n):
  cnt, s = input().split()
  cnt = int(cnt)
  re = ""
  for j in s:
    re += j * cnt
  result.append(re)
print('\n'.join(result))
