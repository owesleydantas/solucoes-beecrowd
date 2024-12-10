def main():
    while True:
        caso = int(input())
        senha = 2002
        if caso == senha:
            print("Acesso Permitido")
            break
        else:
            print("Senha Invalida")

if __name__ == "__main__":
    main()
