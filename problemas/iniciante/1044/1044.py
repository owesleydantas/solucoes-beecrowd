def main():

    a, b = map(int, input().split())

    if b % a == 0 or a % b == 0:
        resultado = "Sao Multiplos"
    else:
        resultado = "Nao sao Multiplos"

    print(resultado)

if __name__ == "__main__":
    main()
