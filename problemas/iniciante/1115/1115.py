def main():
    while True:
        x, y = map(int, input().split())
        if x == 0 or y == 0:
            break
        

        if x > 0 and y > 0:
            print("primeiro")
        elif x < 0 and y < 0:
            print("terceiro")
        elif x < 0 and x < y:
            print("segundo")
        elif x > y and y < 0:
            print("quarto")

if __name__ == "__main__":
    main()
