def main():
    valor = int(input())
    resultado = []
    if valor % 2 != 0:
        resultado.append(valor)
    for numero in range(1, 1000):
        numero += valor
        if numero % 2 != 0:
            resultado.append(numero)
        if len(resultado) == 6:
            break
    
    saida = "\n".join(str(x) for x in resultado)
    print(saida)
if __name__ == "__main__":
    main()
