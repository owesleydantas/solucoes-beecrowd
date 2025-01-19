def main():
    while True:
        try:
            L = int(input())
            valores = [int(x) for x in input().split(' ')]

            maior = max(valores)
            if maior < 10:
                print(1)

            elif maior< 20:
                print(2)
            else:
                print(3)
        except EOFError:
            break
        
if __name__ == "__main__":
    main()
