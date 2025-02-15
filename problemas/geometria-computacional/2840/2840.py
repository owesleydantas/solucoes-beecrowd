def main():
    pi = 3.1415   
    raio, litros = map(int, input().split())
    volume = (4 / 3) * (pi * raio ** 3)

    print(int(litros // volume))

main()
