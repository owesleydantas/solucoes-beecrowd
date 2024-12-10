def main():
    dia, inicio = map(str, input().split())
    hora_inicial, minuto_inicial, segundo_inicial = map(int, input().split(" : "))
    dia, final = map(str, input().split())
    hora_final, minuto_final, segundo_final = map(int, input().split(":"))
    total_inicio = (int(inicio) * 86400) + (hora_inicial * 3600) + (minuto_inicial * 60) + segundo_inicial
    total_final = (int(final) * 86400) + (hora_final * 3600) + (minuto_final * 60) + segundo_final

    duracao_segundos = total_final - total_inicio

    dias = duracao_segundos // 86400
    duracao_segundos %= 86400
    horas = duracao_segundos // 3600
    duracao_segundos %= 3600
    minutos = duracao_segundos // 60
    segundos = duracao_segundos % 60


    print(f"{dias} dia(s)")
    print(f"{horas} hora(s)")
    print(f"{minutos} minuto(s)")
    print(f"{segundos} segundo(s)")

if __name__ == "__main__":
    main()
