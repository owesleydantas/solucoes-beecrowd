def main():
    Ca, Ba, Pa = map(int, input().split())
    Cr, Br, Pr = map(int, input().split())

    saida = 0
    saida += (Cr - Ca) if Cr > Ca else 0
    saida += (Br - Ba) if Br > Ba else 0
    saida += (Pr - Pa) if Pr > Pa else 0
    
    print(saida)

if __name__ == "__main__":
    main()
