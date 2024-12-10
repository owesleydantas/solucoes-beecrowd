def main():
    t = int(input())
    a, b, c, d, e = map(int, input().split())
    entrada = [a, b, c, d, e]
    resultado = 0

    for i in entrada:
        if i == t:
            resultado += 1
    print(resultado)

if __name__ == "__main__":
    main()
