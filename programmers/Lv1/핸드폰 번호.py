def solution(phone_number):
    phone_len = len(phone_number)
    return '*' * (phone_len - 4) + phone_number[phone_len - 4:]
