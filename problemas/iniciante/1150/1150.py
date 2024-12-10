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
