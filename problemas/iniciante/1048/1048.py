def main():
    resultado = []
    reajuste = {
        "15": [0, 400.00],
        "12": [400.01, 800.00],
        "10": [800.01, 1200.00],
        "7": [1200.01, 2000.00],
        "4": [2000.01]
    }

    def verificar(salario: float):
        for p, intervalo in reajuste.items():
            if len(intervalo) == 2:
                if intervalo[0] <= salario <= intervalo[1]:
                    novo_salario = (salario * int(p) / 100) + salario
                    ganho = novo_salario - salario
                    percentual = p
                    resultado.append(novo_salario)
                    resultado.append(ganho)
                    resultado.append(percentual)
            elif len(intervalo) == 1:
                if salario >= intervalo[0]:
                    novo_salario = (salario * int(p) / 100) + salario
                    ganho = novo_salario - salario
                    percentual = p
                    resultado.append(novo_salario)
                    resultado.append(ganho)
                    resultado.append(percentual)

    salario = float(input())
    verificar(salario)
    print(f"Novo salario: {resultado[0]:.2f}")
    print(f"Reajuste ganho: {resultado[1]:.2f}")
    print(f"Em percentual: {resultado[2]} %")

if __name__ == "__main__":
    main()
