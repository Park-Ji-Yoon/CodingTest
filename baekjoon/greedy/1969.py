# DNA
# N개의 길이 M인 DNA s1, s2, ..., sn가 주어져 있을 때 Hamming Distance의 합이 가장 작은 DNA s를 구하는 것이다. 
# 즉, s와 s1의 Hamming Distance + s와 s2의 Hamming Distance + s와 s3의 Hamming Distance ... 의 합이 최소가 된다는 의미이다.

# for문 사용
def dna01():
    n, m = map(int, input().split())
    cnt = 0
    arr = []
    for i in range(n):
        arr.append(input())
    result = ""
    for i in range(m):
        dna_cnt = [0 for _ in range(4)] # [A, C, G, T]
        for j in range(n):
            # dna_cnt에 문자 출현 횟수 기록
            if arr[j][i] == 'A':
                dna_cnt[0] += 1
            elif arr[j][i] == 'C':
                dna_cnt[1] += 1
            elif arr[j][i] == 'G':
                dna_cnt[2] += 1
            elif arr[j][i] == 'T':
                dna_cnt[3] += 1
        # 빈도수가 높은 dna를 result에 차례대로 추가
        if dna_cnt.index(max(dna_cnt)) == 0:
            result += 'A'
        elif dna_cnt.index(max(dna_cnt)) == 1:
            result += 'C'
        elif dna_cnt.index(max(dna_cnt)) == 2:
            result += 'G'
        elif dna_cnt.index(max(dna_cnt)) == 3:
            result += 'T'

    # 입력받은 문자열들과 result를 비교해서 Hamming Distance(cnt) 구함
    for i in range(n):
        for j in range(m):
            if arr[i][j] != result[j]:
                cnt += 1
    print(result)
    print(cnt)

# 행열 전환 사용
def dna02(d, m):
  l = []
  count = 0
  new = list(map(list, zip(*d))) # 행열 전환한 리스트

  for i in range(len(new)):
    a = max(new[i], key=new.count) # 같은 인덱스 자리의 문자들 중 빈도수 높은 것 a에 담음
    count += m - new[i].count(a) # Hamming Distance 구하기 (문자열 길이 - 빈도높은 문자 출연 수)
    l.append(a)
  print(''.join(l), count)

dna = ['ACGTACGTAC', 'CCGTACGTAG', 'GCGTACGTAT', 'TCGTACGTAA']
dna02(dna, 4)