def main():
    valor_1 = int(input())
    valor_2 = int(input())
    resultado = []
    for numero in range(valor_2 + 1, valor_1):
        if numero % 2 != 0:
            resultado.append(numero)
    print(sum(resultado))

if __name__ == "__main__":
    main()
