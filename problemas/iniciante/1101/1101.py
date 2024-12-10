def main():
    while True:
        m, n = map(int, input().split())
        if m  <= 0 or n <= 0:
            break

        menor, maior = min(m, n), max(m, n)
        numeros = list(range(menor, maior + 1))
        soma = sum(numeros)
        print(" ".join(map(str, numeros)), f"Sum={soma}")
         
if __name__ == "__main__":
    main()
