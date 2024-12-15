def main():
    C = int(input())
    for _ in range(C):
        numero = int(input())
        if numero % 2 == 0:
            print("0")
        else:
            print("1")

if __name__ == "__main__":
    main()
