def main():
    T = int(input())
    letras = {'a', 'e', 'i', 'o', 's', 'A', 'E', 'I', 'O', 'S'}

    for _ in range(T):
        count = 1
        senha = str(input().strip())

        for letra in senha:
            if letra in letras:
                count *= 3
            else:
                count *= 2
        print(count)

if __name__ == "__main__":
    main()
