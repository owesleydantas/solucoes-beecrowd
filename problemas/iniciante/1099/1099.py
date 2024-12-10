def main():
    casos = []
    quantia = int(input())
    for caso in range(quantia):
        a, b = map(int, input().split())
        entrada = [a, b]
        casos.append(entrada)
    
    for caso in casos:
        impares = 0
        x, y = caso
        if x > y:
            x, y = y, x
        for numero in range(x + 1, y):
            if numero % 2 != 0:
                impares += numero
        print(impares)

if __name__ == "__main__":
    main()
