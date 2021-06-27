li = []
for _ in range(5):
    line = input()
    li.append(line)

for i in range(max(len(item) for item in li)):
    for j in range(5):
        if i < len(li[j]):
            print(li[j][i], end="")
