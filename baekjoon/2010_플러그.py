import sys

N = int(sys.stdin.readline())
li = []
result = 0

for i in range(N):
  if i == 0:
    result += int(sys.stdin.readline())
  else:
    result += int(sys.stdin.readline()) - 1

print(result)
