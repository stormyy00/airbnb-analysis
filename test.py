def solution(U, weight):
    if len(weight) < 2:
        return 0

    cars_sentback = 0
    left = 0 
    right = 1  
    if weight[left] > U:
        cars_sentback += 1

    while right < len(weight):
        if weight[right] > U:
            cars_sentback += 1
        elif weight[left] + weight[right] > U:
            cars_sentback += 1

            if weight[left] > weight[right]:
                left = right
        else:

            left = right
        right += 1

    return cars_sentback



# Test cases
print(solution(9, [5, 3, 8, 1, 8, 7, 7, 6])) 
print("ans:", solution(7, [7, 6, 5, 2, 7, 4, 5, 4])) 
print(solution(7, [3, 4, 3, 1]))  
print(solution(2, [3, 7, 5, 5, 6, 3, 9, 10, 8, 4])) 
