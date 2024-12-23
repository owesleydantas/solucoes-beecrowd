def main():
    N = int(input())
    for _ in range(N):
        heroi, forca = map(str, input().split())
        if heroi == 'Thor':
            print("Y")
        else:
            print("N")

if __name__ == "__main__":
    main()
