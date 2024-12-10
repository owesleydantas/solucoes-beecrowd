def main():
    entrada = []
    for i in range(100):
        a = int(input())
        entrada.append(a)

    maior = max(entrada)
    posicao = entrada.index(maior) + 1
    print(maior)
    print(posicao)

if __name__ == "__main__":
    main()
