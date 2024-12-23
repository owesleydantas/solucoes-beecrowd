def main():
    N, M = map(int, input().split())
    entrada = []
    for _ in range(M):
        entrada.append(str(input()))
    
    for i in range(len(entrada)):
        if entrada[i] == 'fechou':
            N += 1
        else:
            N -= 1
    print(N)

if __name__ == "__main__":
    main()
