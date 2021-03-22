# 피보나치 수

li = [0, 1]
num = int(input(""))
pre = 0
nex = 1
for i in range(num):
    fibo = pre + nex
    pre = nex
    nex = fibo
    li.append(fibo)
print(li[num])