# 모두의 마블
# 조건1 : 두 카드는 인접한 카드여야 한다.
# 조건2 : 업그레이드 된 카드 A의 레벨은 변하지 않는다.
# 카드 합성을 할 때마다 두 카드 레벨의 합만큼 골드를 받는다.
# 예를 들어, c1, c2, c3로 연속된 카드 3개가 있고 각각 레벨이 40,30,30 이라고 하자.
# 이 카드들을 합치는 과정에서, 먼저 c3에 c2를 합쳐 임시 카드 x1을 만든다.
# x1의 레벨은 30이고 획득 골드는 60이다. 그 다음엔 c1에 x1을 합쳐 카드 x2를 만들면 레벨이 40이고 70만큼의 골드를 획득할 수 있다.
# 이때, 영관이가 획득한 골드는 70+60 = 130이다.

# 방법 1
coin = 0
n = int(input())
cards = list(map(int, input().split()))
ma = max(cards)
del (cards[cards.index(max(cards))])
for card in cards:
    coin += (card+ma)
print(coin)

# 방법 2
n = int(input()) # 카드의 개수 입력 받음
cards = list(map(int, input().split())) # 카드의 레벨

level = max(cards) # 카드 중에서 가장 레벨이 높은 것 저장
del cards[cards.index(max(cards))] # 가장 레벨 높은 카드 삭제
gold = 0 # for문에서 사용하기 위한 초기화
for i in range(len(cards)): # 카드의 개수만큼 for문 돌림 
  gold += level+cards[i] # 레벨과 카드의 값 더하기
print(gold) # 골드의 최댓값 출력