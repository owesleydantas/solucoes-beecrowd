def main():
    ddd = int(input())
    dados = {"11": "Sao Paulo", "61": "Brasilia", "71": "Salvador", "21": "Rio de Janeiro", "32": "Juiz de Fora", "19": "Campinas", "27": "Vitoria", "31": "Belo Horizonte"}

    if str(ddd) not in dados:
        print("DDD nao cadastrado")
    for i in dados:
        if int(i) == ddd:
         print(dados[i])
         break
        
if __name__ == "__main__":
    main()
