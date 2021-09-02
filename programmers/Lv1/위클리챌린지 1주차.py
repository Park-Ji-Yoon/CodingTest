def solution(price, money, count):
    # count의 누적합과 price를 곱해 총 이용료를 구하고 money와의 빼기 연산으로 그 차이를 구한다
    answer = (money - sum(i for i in range(count + 1)) * price) * (-1)
    if answer <= 0: return 0 # 금액이 부족하지 않으면 0을 리턴
    return answer # 부족한 금액을 리턴
