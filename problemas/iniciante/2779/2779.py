def main():
    N = int(input())
    M = int(input())
    figuras = []
    for _ in range(M):
        figura = int(input())
        if figura not in figuras:
            figuras.append(figura)

    print(N - len(figuras))

if __name__ == "__main__":
    main()
