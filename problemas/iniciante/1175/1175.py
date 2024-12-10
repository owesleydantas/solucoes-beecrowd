def main():
    N = []
    for i in range(20):
        try:
            entrada = int(input())
            N.append(entrada)
        except EOFError:
            break

    N.reverse()
    for valor in range(len(N)):
        Y = N[valor]
        print(f"N[{valor}] = {Y}")

if __name__ == "__main__":
    main()
