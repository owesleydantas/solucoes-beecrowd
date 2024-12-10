def main():
    numero = int(input())
    for caso in range(numero):
        x, y = map(int, input().split())
        if y == 0:
            print("divisao impossivel")
        else:
            print(f"{x / y:.1f}")

if __name__ == "__main__":
    main()
