def main():
    jipes = 0
    pessoas = 0
    while True:
        entrada  = input().split()

        Jipe = entrada[0]
        if Jipe == "ABEND":
            break

        Visitantes = int(entrada[1])

        if Jipe == "SALIDA":
            jipes += 1
            pessoas += Visitantes
        
        elif Jipe == "VUELTA":
            jipes -= 1
            pessoas -= Visitantes

    print(pessoas)
    print(jipes)
            
if __name__ == "__main__":
    main()
