# 1150

Categoria: iniciante
Linguagem: python
Link: Link para o problema (Preencher manualmente)

## Solução

```py
def main():
    x = int(input())
    z = 0
    while True:
        try:
            z = int(input())
            if z > x:
                break
        except EOFError:
            break
    resposta, soma = 1, x   
    while soma <= z:
        soma += x + resposta
        resposta += 1
    print(resposta)

if __name__ == "__main__":
    main()

```
