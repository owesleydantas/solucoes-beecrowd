def main():
    T = int(input())
    x = 0
    for i in range(1000):
        print(f"N[{i}] = {x}")
        x += 1
        if x >= T:
            x = 0

if __name__ == "__main__":
    main()
