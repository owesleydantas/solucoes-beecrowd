def main():
    lista = []
    a = 0
    g = 0
    d = 0
    while True:
        combustiveis = [1, 2, 3]
        entrada = int(input())
        if entrada in combustiveis:      
            lista.append(entrada)
        elif entrada == 4:
            for i in lista:
                if i == 1:
                    a += 1
                elif i == 2:
                    g += 1
                elif i == 3:
                    d += 1
            print(f"MUITO OBRIGADO\nAlcool: {a}\nGasolina: {g}\nDiesel: {d}")
            break

if __name__ == "__main__":
    main()
