li = [] # 빈 리스트 선언
for i in range(4):
  li.append(list(map(int, input().split(" ")))) # 4개 역의 내리는 사람, 타는 사람을 리스트로 저장
maxCnt = 0 # 기차에 사람이 가장 많을 때의 사람 수
currCnt = 0 # 현재 사람 수
for i in li:
  currCnt -= i[0] # 내리는 사람 수를 뺌
  currCnt += i[1] # 타는 사람 수를 더함
  if currCnt > maxCnt: maxCnt = currCnt # maxCnt보다 currCnt가 크면 maxCnt값을 currCnt값으로 교체
print(maxCnt)
