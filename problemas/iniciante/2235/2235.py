def main():
    A, B, C= map(int, input().split())

    if (A + B == C) or (B + C == A) or (A + C == B) or (A == B or A == C or B == C):
        print("S")
    else:
        print("N")

if __name__ == "__main__":
    main()
