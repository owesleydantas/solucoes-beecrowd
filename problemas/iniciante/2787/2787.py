def main():
    L = int(input())
    C = int(input())

    tabuleiro = []
    for linha in range(1, L + 1):
        for coluna in range(1, C + 1):
            if (linha - coluna) % 2 == 0:
                tabuleiro.append(1)
            else:
                tabuleiro.append(0)

    print(tabuleiro[-1])

if __name__ == "__main__":
    main()
