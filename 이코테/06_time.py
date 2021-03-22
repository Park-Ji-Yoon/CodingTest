# 시각

cnt = 0
num = int(input(""))
for i in range(num+1):
    for j in range(60):
        for k in range(60):
            if '3' in str(i) or '3' in str(j) or '3' in str(k):
                cnt += 1
print(cnt)