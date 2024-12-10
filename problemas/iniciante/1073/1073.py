def main():
    entrada = int(input())
    for i in range(1, entrada + 1):
        if i % 2 == 0:
            print(f"{i}^2 = {i ** 2}")

if __name__ == "__main__":
    main()
