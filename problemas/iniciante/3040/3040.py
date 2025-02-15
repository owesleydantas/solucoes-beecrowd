def main():
    N = int(input())
    for _ in range(N):
        a, d, g = map(int, input().split())

        if (200 <= a <= 300) and d >= 50 and g >= 150:
            print("Sim")
        else:
            print("Nao")

if __name__ == "__main__":
    main()
