def verificar(A, B):
    tamanho = len(B)
    ultimos_digitos = A[-tamanho:]

    return True if ultimos_digitos == B else False

def main():
    n = int(input())
    for _ in range(n):
        a, b = map(str, input().split())
        print("encaixa" if verificar(a, b) else "nao encaixa")
main()
