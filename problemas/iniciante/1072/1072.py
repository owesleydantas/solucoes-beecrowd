def main():
    valores = []
    dentro = []
    fora = []
    for n in range(1, 10000):
        casos = int(input())
        for x in range(0, casos):
            entrada = int(input())
            valores.append(entrada)
        break

    for numero in valores:
        if 10 <= numero <= 20:
            dentro.append(numero)
        else:
            fora.append(numero)

    print(f"{len(dentro)} in")
    print(f"{len(fora)} out")

if __name__ == "__main__":
    main()
