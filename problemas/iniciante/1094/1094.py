def main():
    numero = int(input())
    entrada = []
    for caso in range(0, numero):
        caso, caractere = map(str, input().split())
        entrada.append((caso, caractere))
    total = []
    coelhos = []
    ratos = []
    sapos = []    
    for tupla in entrada:
        total.append(int(tupla[0]))
        if "C" in tupla:
            coelhos.append(int(tupla[0]))
        elif "R" in tupla:
            ratos.append(int(tupla[0]))
        elif "S" in tupla:
            sapos.append(int(tupla[0]))

    print(f"Total: {sum(total)} cobaias")
    print(f"Total de coelhos: {sum(coelhos)}")
    print(f"Total de ratos: {sum(ratos)}")
    print(f"Total de sapos: {sum(sapos)}")
    print(f"Percentual de coelhos: {sum(coelhos) * 100 / sum(total):.2f} %")
    print(f"Percentual de ratos: {sum(ratos) * 100 / sum(total):.2f} %")
    print(f"Percentual de sapos: {sum(sapos) * 100 / sum(total):.2f} %")
if __name__ == "__main__":
    main()
