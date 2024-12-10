def main():
    jogos = []
    interv = 0
    gremiov = 0
    empates = 0
    while True:
        inter, gremio = map(int, input().split())
        jogo = [inter, gremio]
        jogos.append(jogo)
        resposta = int(input("Novo grenal (1-sim 2-nao)\n"))
        if resposta == 2:
            for partida in jogos:              
                if partida[0] > partida[1]:
                    interv += 1
                elif partida[0] < partida[1]:
                    gremiov += 1
                else:
                    empates += 1
            print(f"{len(jogos)} grenais")
            print(f"Inter:{interv}")
            print(f"Gremio:{gremiov}")
            print(f"Empates:{empates}")
            print(f"{'Inter'if inter > gremio else 'Gremio'} venceu mais")
            break

if __name__ == "__main__":
    main()
