def main():
    while True:
        X, M = map(int, input().split())
        if X == 0 or M == 0:
            break
        print(M * X)

if __name__ == "__main__":
    main()
