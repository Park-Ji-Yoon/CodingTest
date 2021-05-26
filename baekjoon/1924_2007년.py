week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]  # 출력할 요일들을 일~월 순으로 초기화
months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] # 월별 최대 일수 초기화 (1~12월)
month, day = map(int, input().split())
# month-1미만 인덱스까지의 months를 sum하고 day를 더한 값을 7로 나눈 나머지가 인덱스로 사용됨
print(week[(sum(months[:month-1]) + day) % 7]) 
