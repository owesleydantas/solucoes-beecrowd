def main():
    C = int(input())
    for _ in range(C):
        N = int(input())

        if N > 8000:
            print("Mais de 8000!")
        else:
            print("Inseto!")

if __name__ == "__main__":
    main()
