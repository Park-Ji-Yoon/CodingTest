N= int(input())
s = 0
A = list(map(int, input().split()))
B = list(map(int, input().split()))
sortedA = sorted(A, reverse=True)
sortedB = sorted(B)
for i in range(N):
    s += sortedA[i] * sortedB[i]
print(s)
