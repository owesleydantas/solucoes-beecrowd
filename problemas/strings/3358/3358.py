def ehDificil(palavra: str) -> bool:
    vogais = ['a', 'e', 'i', 'o', 'u']
    consoantes = 0

    for letra in palavra:
        if letra.lower() not in vogais:
            consoantes += 1
        else:
            consoantes = 0       
        if consoantes >= 3:
            return True
    return False

def main():
    n = int(input())
    for _ in range(n):
        sobrenome = str(input())
        print(f"{sobrenome} nao eh facil" if ehDificil(sobrenome) else f"{sobrenome} eh facil")

main()
