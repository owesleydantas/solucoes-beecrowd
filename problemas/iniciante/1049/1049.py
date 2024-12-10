def main():
    a = input().strip()
    b = input().strip()
    c = input().strip()
    entrada = [a, b, c]

    aguia = ['vertebrado', 'ave', 'carnivoro']
    pomba = ['vertebrado', 'ave', 'onivoro']
    homem = ['vertebrado', 'mamifero', 'onivoro']
    vaca = ['vertebrado', 'mamifero', 'herbivoro']
    pulga = ['invertebrado', 'inseto', 'hematofago']
    lagarta = ['invertebrado', 'inseto', 'herbivoro']
    sanguesuga = ['invertebrado', 'anelideo', 'hematofago']
    minhoca = ['invertebrado', 'anelideo', 'onivoro']

    if entrada == aguia:
        print("aguia")
    elif entrada == pomba:
        print("pomba")
    elif entrada == homem:
        print("homem")
    elif entrada == vaca:
        print("vaca")
    elif entrada == pulga:
        print("pulga")
    elif entrada == lagarta:
        print("lagarta")
    elif entrada == sanguesuga:
        print("sanguessuga")
    elif entrada == minhoca:
        print("minhoca")

if __name__ == "__main__":
    main()
