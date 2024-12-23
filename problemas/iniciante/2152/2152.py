def main():
    N = int(input())

    for _ in range(N):
        hora, minuto, acao = map(int, input().strip().split())
        situacao = "abriu" if acao else "fechou"
        print(f"{hora:02d}:{minuto:02d} - A porta {situacao}!")

if __name__ == "__main__":
    main()
