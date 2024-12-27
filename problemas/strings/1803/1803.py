def main():
    matriz = [input().strip() for _ in range(4)]

    numeros = []

    numero_colunas = len(matriz[0])
    for coluna in range(numero_colunas):
        numero = int("".join(matriz[linha][coluna] for linha in range(4)))
        numeros.append(numero)

    F = numeros[0]
    L = numeros[-1]
    M = numeros[1:-1]

    mensagem = ''

    for Mi in M:
        Ci = (F * Mi + L) % 257
        mensagem += chr(Ci)

    print(mensagem)

if __name__ == "__main__":
    main()
