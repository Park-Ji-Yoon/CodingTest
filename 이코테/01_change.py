# 거스름돈 구하기
money = int(input(""))
cnt = 0
arr = [500, 100, 50, 10]
for a in arr:
    cnt += money // a
    money %= a
print(cnt)