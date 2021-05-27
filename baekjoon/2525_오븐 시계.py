h, m = map(int, input().split())
n = int(input())
h += n // 60
m += n % 60

if 60 <= m:
  m -= 60
  h += 1

if 24 <= h:
  h -= 24

print(h, m)
