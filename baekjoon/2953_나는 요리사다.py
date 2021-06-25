high = 0
idx = 0
for i in range(5):
  li = list(map(int, input().split()))
  if high < sum(li):
    high = sum(li)
    idx = i + 1
print(idx, high)
