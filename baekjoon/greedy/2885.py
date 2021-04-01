def confirm(cut, k):
    for i in range(len(cut)):
        result = 0
        co = cut[i]
        if co <= k:
            result += k // co
            k %= co
            if k == 0:
                return result
        return result

def fun():
    k = int(input())
    arr = []
    result = 0
    cnt = 0
    for i in range(100):
        arr.append(2**i)
    min_choco = 0
    for a in arr:
        if k <= a:
            min_choco += a
            break
    print(min_choco, end=" ")
    if k in arr:
        print(result)
        return 0
    cut = []
    while min_choco != 1:
        if cnt == 0:
            choco = min_choco // 2
            for i in range(min_choco // choco):
                cut.append(choco)
            min_choco = choco
            result += confirm(cut, k)
        else:
            cut.remove(min(cut))
            choco = min_choco // 2
            for i in range(min_choco // choco):
                cut.append(choco)
            min_choco = choco
            result += confirm(cut, k)
        cnt += 1
    print(cut)
    # print(cnt)
    print(result)

fun()
