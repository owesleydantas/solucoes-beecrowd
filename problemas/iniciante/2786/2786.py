def main():
    L = int(input())
    C = int(input())
    tipo_1 = (L * C + (L - 1) * (C - 1))
    tipo_2 = ((L - 1) * 2) + ((C - 1) * 2)

    print(tipo_1)
    print(tipo_2)

if __name__ == "__main__":
    main()
