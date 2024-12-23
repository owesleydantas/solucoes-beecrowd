def main():
    while True:
        try:
            N = int(input())
            print(N - 1)
        except EOFError:
            break
        
if __name__ == "__main__":
    main()
