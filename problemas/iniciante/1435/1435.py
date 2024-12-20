def main():
    while True:
        N = int(input())
        if N == 0:
            break

        saida = ''
        for i in range(N):
            saida += f"{1:3d}"
            for j in range(1, N):
                saida += f"{(min(min(i, N - i - 1), min(j, N - j - 1)) +1):4d}"
            
            saida += "\n"
        
        print(saida)

if __name__ == "__main__":
    main()
