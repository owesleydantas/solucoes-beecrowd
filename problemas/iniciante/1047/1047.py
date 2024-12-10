def main():
    a, b, c, d = map(int, input().split())
    
    inicio_em_minutos = a * 60 + b
    final_em_minutos = c * 60 + d
    if final_em_minutos <= inicio_em_minutos:
        final_em_minutos += 24 * 60
    
    duracao = final_em_minutos - inicio_em_minutos

    horas = duracao // 60
    minutos = duracao % 60

    print(f"O JOGO DUROU {horas} HORA(S) E {minutos} MINUTO(S)")

if __name__ == "__main__":
    main()
