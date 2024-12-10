def main():
    a, b, c = map(float, input().split())
    entrada = sorted([a, b, c], reverse=True)
    resultado = []
    if entrada[0] >= entrada[1] + entrada[2]:
        resultado.append("NAO FORMA TRIANGULO")
    else:
        if entrada[0] ** 2 == entrada[1] ** 2 + entrada[2] ** 2:
            resultado.append("TRIANGULO RETANGULO")
        if entrada[0] ** 2 > entrada[1] ** 2 + entrada[2] ** 2:
            resultado.append("TRIANGULO OBTUSANGULO")
        if entrada[0] ** 2 < entrada[1] ** 2 + entrada[2] ** 2:
            resultado.append("TRIANGULO ACUTANGULO")

        if entrada[0] == entrada[1] == entrada[2]:
            resultado.append("TRIANGULO EQUILATERO")
        elif entrada[0] == entrada[1] or entrada[1] == entrada[2] or entrada[0] == entrada[2]:
            resultado.append("TRIANGULO ISOSCELES")

    for linha in resultado:
     print(linha)

if __name__ == "__main__":
    main()
