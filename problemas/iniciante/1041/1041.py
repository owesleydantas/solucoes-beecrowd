def main():
    x, y = map(float, input().split())

    if x  > 0 and y > 0:
        resultado = "Q1"
    elif x < 0 and y > 0:
        resultado = "Q2"
    elif x < 0 and y < 0:
        resultado = "Q3"
    elif x > 0 and y < 0:
        resultado = "Q4"
    elif x == 0 and y > 0 or x == 0 and y < 0:
        resultado = "Eixo Y"
    elif y == 0 and x > 0 or y == 0 and x < 0:
        resultado = "Eixo X"
    else:
        resultado = "Origem" 

    print(resultado)

if __name__ == "__main__":
    main()
