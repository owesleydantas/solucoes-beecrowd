def main():
    a, b = map(int, input().split())
    entrada = [a, b]
    dif = (entrada[1] - entrada[0]) % 24

    print(f"O JOGO DUROU {dif} HORA(S)" if dif > 0 else "O JOGO DUROU 24 HORA(S)")

if __name__ == "__main__":
    main()
