def main():
    valor = int(input())
    if 1 <= valor <= 1000:
        for i in range(1, valor + 1):
            if i % 2 != 0:
                print(i)

if __name__ == "__main__":
    main()
