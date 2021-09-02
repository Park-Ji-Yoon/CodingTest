def solution(s):
    answer = s # answer에 s대입
    
    # 각 숫자를 의미하는 영단어를 리스트 변수로 만듬
    alph = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"] 
    for i in range(len(alph)):
        if alph[i] in answer: # answer에 영단어가 하나 이상 있으면
            answer = answer.replace(alph[i], str(i)) # replace로 영단어를 숫자로 바꿈
    return int(answer)
