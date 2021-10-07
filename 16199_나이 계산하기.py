import datetime
birth_li = list(map(int, input().split(" ")))
based_li = list(map(int, input().split(" ")))
birth = datetime.datetime(birth_li[0], birth_li[1], birth_li[2])
based = datetime.datetime(based_li[0], based_li[1], based_li[2])

if birth.month < based.month:
    man = based.year - birth.year
elif birth.month == based.month:
    if birth.day <= based.day:
        man = based.year - birth.year
    else:
        man =  based.year - birth.year - 1
else:
    man = based.year - birth.year - 1
count = based.year - birth.year + 1
year = based.year - birth.year

print(man)
print(count)
print(year)
