test_case = int(input())

for t in range(test_case):
    wid, hei, pos = map(int, input().split())
    arr = []
    for i in range(pos):
        a = list(map(int, input().split()))
        arr.append(a)
