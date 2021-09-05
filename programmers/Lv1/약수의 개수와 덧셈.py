def solution(left, right):
    li = [i for i in range(left, right + 1)] # left부터 right까지의 수로 이루어진 배열
    for idx, item in enumerate(li):
        if getCnt(item) % 2 != 0: # 약수의 개수가 홀수면
            li[idx] = li[idx] * (-1) # 해당 수에 -1을 곱해 음수로 만든다
    return sum(li) # li의 합을 구한다


# 약수의 개수를 구하는 함수
def getCnt(num):
    if num == 1: return 1
    elif num == 2 : return 2
    else:
        count = 2
        for i in range(2, num): 
            if num % i == 0: 
                count += 1 
        return count
