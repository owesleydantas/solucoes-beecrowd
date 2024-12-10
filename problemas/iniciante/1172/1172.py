def main():
    for numero in range(0, 10):
        valor = int(input())
        if valor <= 0:
            valor= 1
        print(f"X[{numero}] = {valor}")

if __name__ == "__main__":
    main()
