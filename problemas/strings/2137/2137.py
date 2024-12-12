def main():
    while True:
        try:
            N = int(input())
            livros = []
            for _ in range(N):
                
                codigo = input()
                livros.append(codigo)
            
            livros.sort()

            for i in range(N):
                print(livros[i])
        except EOFError:
                break

if __name__ == "__main__":
    main()
