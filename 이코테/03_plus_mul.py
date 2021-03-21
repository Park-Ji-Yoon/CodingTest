# 더하기 혹은 곱하기 (최대)

nums = input("")
result = int(nums[0])
for i in range(1, len(result)):
    num = int(nums[i])
    if num <= 1 or result <= 1:
        result += num
    else:
        result *= num
print(result)