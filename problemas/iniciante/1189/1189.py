def main():
    O = input()
    soma = 0.0
    count = 0

    for i in range(12):
        for j in range(12):
            valor = float(input())

            if ((j < 5) and ((i < 6 and j < i) or (i > 5 and j < 11 - i))):
                soma += valor
                count += 1

    print(f"{soma}" if O == 'S' else f"{(soma / count):.1f}")

if __name__ == "__main__":
    main()
