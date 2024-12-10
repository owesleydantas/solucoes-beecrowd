def main():

    t1, t2, t3, t4 = map(int, input().split())
    entrada_lista = [t1, t2, t3, t4]
    for regua in range(0, 3):
        entrada_lista[regua] -= 1

    resultado = sum(entrada_lista)
    print(resultado)

if __name__ == "__main__":
    main()
