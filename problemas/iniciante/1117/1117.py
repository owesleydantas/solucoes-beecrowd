def main():
    notas = []
    while True:
        nota = float(input())
        if 0 <= nota <= 10:            
            notas.append(nota)
        else:
            print("nota invalida")
        if len(notas) == 2:
            total = sum(notas)
            print(f"media = {total / 2:.2f}")
            break

if __name__ == "__main__":
    main()
