def main():
    entrada = float(input())

    if entrada <= 2000.00:
        print("Isento")
    elif entrada <= 3000.00:
        print(f"R$ {(entrada - 2000.00) * 0.08:.2f}")
    elif entrada <= 4500.00:
        print(f"R$ {(1000.00 * 0.08) + ((entrada - 3000.00) * 0.18):.2f}")
    else:
        print(f"R$ {(1000.00 * 0.08) + (1500.00 * 0.18) + ((entrada - 4500) * 0.28):.2f}")

if __name__ == "__main__":
    main()
