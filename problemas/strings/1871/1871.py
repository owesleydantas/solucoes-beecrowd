def main():
    while True:
        M, N = map(int, input().split(' '))
        soma = M + N
        if soma == 0:
            break
        string = str(soma)

        print(f"{string}" if '0' not in string else string.replace('0', ''))

if __name__ == "__main__":
    main()
