def main():
    H, E, A, O, W, X = map(int, input().split())
    ladoBem = H + E + A + X
    ladoMal = O + W

    print("Middle-earth is safe." if (ladoBem > ladoMal and ladoMal < ladoBem) else "Sauron has returned.")

main()
