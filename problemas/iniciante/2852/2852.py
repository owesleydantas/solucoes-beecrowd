def gerar_tabela():
    alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    matriz = []
    
    for _ in range(26):
        matriz.append(alfabeto)
        alfabeto = alfabeto[1:] + alfabeto[0]
    return matriz

def gerar_chave(palavra: str, chave: str) -> str:
    return (chave * ((len(palavra) // len(chave)) + 1))[:len(palavra)]     

def criptografar(palavra: str, chave: str, tabela: list) -> str:
    chave_ciclica = gerar_chave(palavra, chave)

    cript = []
    for i, letra in enumerate(palavra):
        linha = ord(chave_ciclica[i]) - ord('a')
        coluna = ord(letra) - ord('a')
        cript.append(tabela[linha][coluna])

    return ''.join(cript)

def main():
    try:
        chave = input().strip().lower()
        N = int(input())
        tabela = gerar_tabela()
        for _ in range(N):
            nova_mensagem = []
            mensagem = input().strip()
            palavras = mensagem.split()

            for p in palavras:
                if p[0].lower() not in 'aeiou':
                    nova_mensagem.append(criptografar(p, chave, tabela))
                else:
                    nova_mensagem.append(p)
                    
            print(' '.join(nova_mensagem))

    except Exception as e:
        print(e)

if __name__ == "__main__":
    main()
