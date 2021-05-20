while(True):
  num = input()
  if num == "0": break
  s = 0
  for n in num:
    if n == "1": s += 2
    elif n == "0": s += 4
    else : s += 3
  print(s + len(num) + 1)
