# Template para Beecrowd (Python)

def main():
    # Exemplo de como ler a entrada
    tabela = {"1": 4, "2": 4.5, "3": 5, "4": 2, "5": 1.5}
    a, b = map(int, input().split())
    for codigo in tabela:
        valor = tabela[codigo]
        if str(a) == codigo:
            saida = valor * b
    
    # Processamento da l�gica do problema
    resultado = f"Total: R$ {saida:.2f}"
    
    # Exibir a sa�da
    print(resultado)

if __name__ == "__main__":
    main()
