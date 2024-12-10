def main():
    a = input()
    b = input()
    c = input()
    d = input()
    e = input()
    f = input()
    entrada = [a, b, c, d, e, f]
    valores = (float(x) for x in entrada)
    resultado = 0
    for numero in valores:
        if numero > 0:
            resultado += 1

    print(f"{resultado} valores positivos")

if __name__ == "__main__":
    main()
