def main():
    x = int(input())
    y = int(input())
    if x > y:
        x, y = y, x

    for valor in range(x + 1, y):
        if valor % 5 == 2 or valor % 5 == 3:
            print(valor)

if __name__ == "__main__":
    main()
