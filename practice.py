n, m = map(int, input().split())
cnt = 0
arr = []
for i in range(n):
    arr.append(input())
result = ""
for i in range(m):
    dna_cnt = [0 for _ in range(4)]
    for j in range(n):
        if arr[j][i] == 'A':
            dna_cnt[0] += 1
        elif arr[j][i] == 'C':
            dna_cnt[1] += 1
        elif arr[j][i] == 'G':
            dna_cnt[2] += 1
        elif arr[j][i] == 'T':
            dna_cnt[3] += 1
    if dna_cnt.index(max(dna_cnt)) == 0:
        result += 'A'
    elif dna_cnt.index(max(dna_cnt)) == 1:
        result += 'C'
    elif dna_cnt.index(max(dna_cnt)) == 2:
        result += 'G'
    elif dna_cnt.index(max(dna_cnt)) == 3:
        result += 'T'

for i in range(n):
    for j in range(m):
        if arr[i][j] != result[j]:
            cnt += 1
print(result)
print(cnt)