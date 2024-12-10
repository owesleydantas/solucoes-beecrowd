def main():
    entrada = int(input())
    valores = []
    for i in range(0, entrada):
        caso = int(input())
        valores.append(caso)
    
    for elemento in valores:
        if elemento == 0:
            print(f"NULL")
        elif elemento < 0 and elemento % 2 == 0:
            print("EVEN NEGATIVE")
        elif elemento < 0 and elemento % 2 != 0:
            print("ODD NEGATIVE")
        elif elemento > 0 and elemento % 2 == 0:
            print("EVEN POSITIVE")
        elif elemento > 0 and elemento % 2 != 0:
            print("ODD POSITIVE")
        elif elemento % 2 == 0:
            print("EVEN")
        else:
            print("ODD")

if __name__ == "__main__":
    main()
