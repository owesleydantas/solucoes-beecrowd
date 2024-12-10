def main():
    O = input()
    Matriz = []
    soma = 0.0
    count = 0

    for i in range(12):
        Matriz.append([])
        for j in range(12):
            Matriz[i].append(float(input()))

            if j > i:
                soma += Matriz[i][j]
                count += 1
    if O == 'S':
        print(f"{soma:.1f}")
    else:
        print(f"{(soma / count):.1f}")

if __name__ == "__main__":
    main()
