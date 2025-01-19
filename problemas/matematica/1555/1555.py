def r(x, y):
    return (3 * x) ** 2 + y * y

def b(x, y):
    return 2 * x * x + (5 * y) ** 2

def c(x, y):
    return -100 * x + y ** 3

N = int(input())
for _ in range(N):
    x, y = map(int, input().split())

    if r(x, y) > b(x, y) and r(x, y) > c(x, y):
        print("Rafael ganhou")
    elif b(x, y) > c(x, y):
        print("Beto ganhou")
    else:
        print("Carlos ganhou")