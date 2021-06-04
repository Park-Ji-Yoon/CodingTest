num = int(input())
for i in range(num - 1):
  print((' ' * (num - i - 1)) + ('*' * (i * 2 + 1)))
for i in range(num):
  print((' ' * i) + ('*' * (num - i)) + ('*' * (num - 1 - i)))
