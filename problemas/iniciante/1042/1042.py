def main():
    # Exemplo de como ler a entrada
    a, b, c = map(int, input().split())
    entrada = [a, b, c]
    entrada_string = (str(x) for x in entrada)
    resultado = sorted(entrada)
    resultado_string = (str(x) for x in resultado)

    formated_entrada = "\n".join(inteiro for inteiro in entrada_string)
    formated_resultado = "\n".join(i for i in resultado_string)
    print(f"{formated_resultado}\n\n{formated_entrada}")

if __name__ == "__main__":
    main()
