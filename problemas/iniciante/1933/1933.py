def main():
    a, b = map(int, input().split())

    if a >= b:
        print(a)
    else:
        print(max(a, b))

if __name__ == "__main__":
    main()
