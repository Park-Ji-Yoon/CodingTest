import sys

def gcd(a, b):
    return gcd(b, a % b) if b else a
def lcm(a, b):
    return a * b // gcd(a, b)

num = int(sys.stdin.readline())
for i in range(num):
    a, b = map(int, input().split())
    print(lcm(a, b))
