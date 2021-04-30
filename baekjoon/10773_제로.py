k = int(input()) # 몇 개의 수를 입력받을지 k를 입력받음
stack = [] # 빈 스택을 준비
for i in range(0, k):  # 0에서 k까지 반복
  num = int(input())   # num에 입력받은 값 넣어줌
  if(num != 0):        # num이 0이 아니면
    stack.append(num)  # stack에 num을 더해줌
  else:                # num이 0이라면
    stack.pop()        # stack의 마지막에 있는 값을 빼줌
print(sum(stack))      # stack 배열 요소의 총합을 구해서 출력
