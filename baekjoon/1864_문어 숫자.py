li = ["-", "\\", "(", "@", "?", ">", "&", "%"] # 문어가 쓰는 문자들(양수) 초기화
minus = '/' # 문어가 쓰는 문자(음수) 초기화
result = [] # 결과들을 담을 배열

while(True):
  s = input()
  if s[0] == '#': break # 입력값이 '#'이면 반복문 벗어남
  answer = 0

  for i in range(len(s)):
    num = 0
    if s[i] == minus: num = -1 # s[i]가 minus이면 num에 -1 초기화
    else: num = li.index(s[i]) # s[i]가 minus가 아니면 li에서 인덱스를 찾아 num에 인덱스를 값으로 초기화
    if i == (len(s) - 1): answer += num # i가 마지막 인덱스면 그대로 answer에 num더함
    else: answer += (num * pow(8, len(s) - i - 1)) # num과 8의 n제곱한 값을 곱한 것을 answer에 더함
  result.append(answer) # result에 연산한 answer 추가
  
print('\n'.join(map(str, result))) # 숫자형 배열을 str로 형변환 후 join()해서 출력
