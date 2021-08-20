n, k = map(int, input().split())
coin = []
result = 0

for i in range(n):
    coin.append(int(input()))
for i in range(len(coin)):
    co = coin[len(coin)-i-1]
    if co <= k:
        result += k // co
        k %= co
print(result)
