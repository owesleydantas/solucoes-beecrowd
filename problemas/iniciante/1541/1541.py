import math

def main():
    while True:
        try:
            A, B, C = map(int, input().split(' '))

            if A == 0:
                break

            print(f"{math.floor(math.sqrt(A * B * 100 / C)):.0f}")
        
        except EOFError:
            break
        except ValueError:
            break

if __name__ == "__main__":
    main()
