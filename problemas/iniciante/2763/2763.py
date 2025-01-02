def main():
    saida = ''
    resultado = []
    CPF = str(input().replace('.', ''))
    for elemento in CPF:
        saida += elemento
        if len(saida) == 3:
            resultado.append(saida)
            saida = ''
    
    for valor in resultado:
        print(valor.replace('-', ''))
        
if __name__ == "__main__":
    main()
