sy, sm = 0, 0
n = int(input())
arr = list(map(int, input().split()))
for a in arr:
  sy += (a // 30 + 1) * 10
  sm += (a // 60 + 1) * 15
if sy == sm:
  print("Y M " + str(sy))
elif sy < sm:
  print("Y " + str(sy))
else:
  print("M " + str(sm))
