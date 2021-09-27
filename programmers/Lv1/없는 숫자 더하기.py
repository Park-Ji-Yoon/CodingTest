def solution(numbers):
    numli = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] # 숫자의 배열 초기화
    for number in numbers:
        numli.remove(number) # 모든 숫자 배열에서 numbers에 있는 값 제거
    return sum(numli) # 남은 값의 합
