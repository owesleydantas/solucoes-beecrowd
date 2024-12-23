def main():
    while True:
        try:
            V = float(input())
            D = float(input())

            area = 3.14 * ((D / 2) ** 2)
            altura = V / area

            print(f"ALTURA = {altura:.2f}")
            print(f"AREA = {area:.2f}")

        except EOFError:
            break

if __name__ == "__main__":
    main()
