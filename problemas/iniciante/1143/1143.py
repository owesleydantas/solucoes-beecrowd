def main():
    entrada = int(input())
    print(f"1 1 1")
    inicio = 1
    for i in range(1, entrada):
        print(f"{i + inicio} {(i + inicio) ** 2} {(i + inicio) **3}")
if __name__ == "__main__":
    main()
