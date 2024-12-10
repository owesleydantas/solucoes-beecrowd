# Template para Beecrowd (Python)

def main():
    # Exemplo de como ler a entrada
    pesos = [2, 3, 4, 1]
    notas_calculadas = []
    def media(notas: list[int]):
        soma_ponderada = sum(nota * peso for nota, peso in zip(notas, pesos))
        return soma_ponderada / sum(pesos)

    n1, n2, n3, n4  = map(float, input().split())

    notas = [n1, n2, n3, n4]
    media_inicial = media(notas)
    resultado = []
    resultado.append(f"Media: {media_inicial:.1f}")

    if media_inicial >= 7.0:
        resultado.append("Aluno aprovado.")
    elif media_inicial < 5.0:
        resultado.append("Aluno reprovado.")
    elif media_inicial >= 5.0 and media_inicial <=6.9:
        resultado.append("Aluno em exame.")
        nota_exame = float(input())
        resultado.append(f"Nota do exame: {nota_exame}")
        media_final = (media_inicial + nota_exame) / 2
        if media_final > 5.0:
            resultado.append("Aluno aprovado.")
            resultado.append(f"Media final: {media_final:.1f}")
        else:
            resultado.append("Aluno reprovado.")
    resultado_formatado = "\n".join(x for x in resultado)
    print(resultado_formatado)

if __name__ == "__main__":
    main()
