def main():
    i = 0
    while i <= 2:
        for j in range(1, 4):
            if i == int(i):
                print(f"I={int(i)} J={int(i + j)}")
            else:
                print(f"I={i:.1f} J={(i + j):.1f}")
        i += 0.2
        i = round(i, 1)

if __name__ == "__main__":
    main()
