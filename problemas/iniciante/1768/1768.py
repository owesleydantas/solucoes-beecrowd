def desenhar(N):
    for i in range(1, N + 1, 2):
        espacos = (N - i) // 2
        print(' ' * espacos + '*' * i)

    tronco = (N - 1) // 2
    print(" " * tronco + '*')
    print(" " * (tronco - 1) + '*' * 3)

def main():
    try:
        while True:
            N = int(input())
            desenhar(N)
            print()
    except EOFError:
        pass
    
if __name__ == "__main__":
    main()
