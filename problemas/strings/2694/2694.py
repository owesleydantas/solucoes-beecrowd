def pegar_valores(string: str):
    a = f"{string[2]}{string[3]}"
    b = f"{string[5]}{string[6]}{string[7]}"
    c = f"{string[11]}{string[12]}"

    return [int(a), int(b), int(c)]

N = int(input())
for _ in range(N):
    linha = str(input())
    print(sum(pegar_valores(linha)))
