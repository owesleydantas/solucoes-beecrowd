def main():
    x = int(input())
    y = int(input())
    if x > y:
        x, y = y, x
    soma = 0
    for numero in range(x, y + 1):
        if numero % 13 != 0:
            soma += numero
    print(soma)

if __name__ == "__main__":
    main()
