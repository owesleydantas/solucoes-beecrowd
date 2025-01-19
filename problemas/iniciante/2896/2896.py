def main():
    T = int(input())
    for _ in range(T):
        N, K = map(int, input().split())       
        garrafas = N
        vazias = N

        while vazias >= K:
            novas = garrafas // K
            garrafas += novas
            vazias = vazias % K + novas
            break
        
        print(vazias)

if __name__ == "__main__":
    main()
