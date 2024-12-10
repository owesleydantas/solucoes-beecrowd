def main():
    while True:
        notas = []
        while len(notas) < 2:             
            nota = float(input())
            if 0 <= nota <= 10:
                notas.append(nota)
            else:
                print("nota invalida")
        print(f"media = {sum(notas) / 2:.2f}")

        while True:
            resp = int(input("novo calculo (1-sim 2-nao)\n"))
            if resp == 1:
                break
            if resp == 2:
                return

if __name__ == "__main__":
    main()
