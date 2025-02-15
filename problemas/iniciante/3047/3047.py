def main():
    M = int(input())
    A = int(input())
    B = int(input())

    C = M - (A + B)
    if C > A and C > B:
        print(C)
    elif A > B:
        print(A)
    else:
        print(B)

if __name__ == "__main__":
    main()
