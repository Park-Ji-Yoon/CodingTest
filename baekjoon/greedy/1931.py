# 회의실 배정
# 한 개의 회의실이 있는데 이를 사용하고자 하는 N개의 회의에 대하여 회의실 사용표를 만들려고 한다.
# 각 회의 I에 대해 시작시간과 끝나는 시간이 주어져 있고,
# 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 회의의 최대 개수를 찾아보자.

N = int(input())
lst = list()
for i in range(N):
    lst.append(list(map(int, input().split())))

lst.sort(key=lambda x : (x[1], x[0])) # 끝나는 순으로 정렬 후, 시작하는 순으로 정렬

cnt = 1
last_end_time = lst[0][1]
for i in range(1, N):# 시작시간이 처음의 끝시간보다 작으면 안됨
    if last_end_time <= lst[i][0]: # i번째 회의의 시작시간이 최근에 끝난 회의 시간 이하이면
        cnt = cnt + 1 # 추가
        last_end_time = lst[i][1] # 최근에 끝난 회의 시간 변경

print(cnt)