def main():
    N = int(input())
    A, B = map(int, input().split())

    print("Deixa para amanha!" if A + B > N else "Farei hoje!")
if __name__ == "__main__":
    main()
