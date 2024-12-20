def main():
    while True:
        N = int(input())

        if N == 0:
            break

        saida = ''
        for i in range(N):
            saida += f"{(i + 1):3d}"
            for j in range(1, N):
                saida += f"{(abs(i - j) + 1):4d}"
            saida += "\n"
        
        print(saida)

if __name__ == "__main__":
    main()
