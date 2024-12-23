def main():
    n = int(input())
    saida = 0.0
    if n == 0:
        saida = 3.0
    else:
        saida = 6.0
        for _ in range(n - 1):
            saida = 6.0 + 1.0 / saida
        saida = 3.0 + 1.0 / saida
    print(f"{saida:.10f}")  

if __name__ == "__main__":
    main()
