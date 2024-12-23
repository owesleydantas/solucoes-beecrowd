def main():
    N = int(input())
    valores = [int(x) for x in input().strip().split(' ')]

    for i in range(2, 6):
        print(f"{sum([1 if x % i == 0 else 0 for x in valores])} Multiplo(s) de {i}")

if __name__ == "__main__":
    main()
