def main():
    O = input()
    soma = 0.0
    count = 0

    for i in range(12):
        for j in range(12):
            valor = float(input())

            if i > j:
                soma += valor
                count += 1

    if O == "S":
        print(f"{soma:.1f}")
    else:
        print(f"{(soma / count):.1f}")

if __name__ == "__main__":
    main()
