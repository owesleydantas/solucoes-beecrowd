def main():
    C = int(input())
    for _ in range(C):
        B, E = map(int, input().split())
        saida = ""
        for i in range(B, E + 1):
            saida += f"{i}"

        print(f"{saida + saida[::-1]}")

if __name__ == "__main__":
    main()
