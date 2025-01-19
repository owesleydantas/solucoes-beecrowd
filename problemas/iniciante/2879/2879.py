def main():
    N = int(input())
    vitorias = 0
    for _ in range(N):
        porta = int(input())
        if porta != 1:
            vitorias += 1
    
    print(vitorias)

if __name__ == "__main__":
    main()
