def main():
    numero_de_casos = int(input())
    casos = []
    for caso in range(0, numero_de_casos):
        a, b, c = map(float, input().split())
        casos.append([a, b, c])
    for lista in casos:
        n1 = lista[0]
        n2 = lista[1]
        n3 = lista[2]
        print(f"{((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10:.1f}")

if __name__ == "__main__":
    main()
