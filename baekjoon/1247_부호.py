from sys import stdin

result = []
for i in range(3):
  n = int(stdin.readline())
  s = 0
  for j in range(n):
    s += int(stdin.readline())
  if s == 0: result.append("0")
  elif s < 0: result.append("-")
  else :result.append("+")
print('\n'.join(result))
