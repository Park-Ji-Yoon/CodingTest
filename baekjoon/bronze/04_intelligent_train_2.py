# 2460번
# 지능형 기차가 1번역(출발역)부터 10번역(종착역)까지 10개의 정차역이 있는 노선에서 운행되고 있다.
# 출발역에서 종착역까지 가는 도중 기차 안에 사람이 가장 많을 때의 사람 수를 계산하려고 한다.
# 내릴 사람이 모두 내린 후에 기차에 탄다고 가정한다.

# 내가 짠 코드
people_cnt = 0
arr = list()
for i in range(10):
    down, up = map(int, input("").split())
    people_cnt -= down
    arr.append(people_cnt)
    people_cnt += up
    arr.append(people_cnt)
print(max(arr))

# 다른 사람의 코드
passenger = 0
max_passenger = 0
for _ in range(10):
    out_train, in_train = map(int, input().split())
    passenger += in_train - out_train
    max_passenger = max(passenger, max_passenger)
print(max_passenger)