def main():
    X = float(input())
    for i in range(100):
        print(f"N[{i}] = {X:.4f}")
        X /= 2

if __name__ == "__main__":
    main()
