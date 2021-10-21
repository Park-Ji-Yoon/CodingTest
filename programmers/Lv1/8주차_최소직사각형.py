def solution(sizes):
    answer = 0 
    li = [sorted(size, reverse=True) for size in sizes] 
    width = [size[0] for size in li] 
    height = [size[1] for size in li] 
    w, h = max(width), max(height) 
    answer = w * h 
    return answer
