def main():
    array = [300, 1500, 600, 1000, 150]
    result = 0
    for porcao  in array:
        entrada = int(input())
        result += porcao * entrada
    
    print(result + 225)

if __name__ == "__main__":
    main()
