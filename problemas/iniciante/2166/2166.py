def main():
    n = int(input())
    saida = 0.0
    if n == 0:
        saida = 1.0
    else:
        saida = 2.0
        for _ in range(n - 1):
            saida = 2.0 + 1.0 / saida
        saida = 1.0 + 1.0 / saida
    print(f"{saida:.10f}")  

if __name__ == "__main__":
    main()
