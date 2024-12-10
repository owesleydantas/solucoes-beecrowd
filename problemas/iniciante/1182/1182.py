def main():
    linha = int(input())
    operacao = input()

    soma = 0.0
    for i in range(12):
        for _ in range(12):
            valor = float(input())

            if _ == linha:
                soma += valor
    
    if operacao == 'S':
        print(f"{soma:.1f}")
    else:
        print(f"{(soma / 12):.1f}")

if __name__ == "__main__":
    main()
