# 상하좌우

num = int(input(""))
x, y = 1, 1
roads = input().split()

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
move_types = ['L', 'R', 'U', 'D']

for r in roads:
    for i in range(len(move_types)):
        if r == move_types[i]:
            imsi_x = x + dx[i]
            imsi_y = y + dy[i]
    if imsi_x < 1 or imsi_y < 1 or imsi_x > num or imsi_y > num:
        continue
    x, y = imsi_x, imsi_y
print(x, y)