def main():
    while True:
        try:
            N, L = map(int, input().split())
            soma = 0
            for _ in range(N):
                identificador, J = map(int, input().split())
                if identificador == L and J == 0:
                    soma += 1
            
            print(soma)

        except EOFError:
            break

if __name__ == "__main__":
    main()
