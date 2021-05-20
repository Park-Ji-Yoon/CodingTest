x, y, w, h = map(int, input().split())
pos = [x, y, w - x, h - y] 
print(min(pos))
