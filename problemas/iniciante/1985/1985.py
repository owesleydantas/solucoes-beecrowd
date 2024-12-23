def main():
    estoque = {1001: 1.50, 1002: 2.50, 1003: 3.50, 1004: 4.50, 1005: 5.50}
    entrada = []
    pagar = 0
    p = int(input())
    for _ in range(p):
        codigo, quantidade = map(int, input().split())
        entrada.append([codigo, quantidade])
    
    for pedido in entrada:
        if pedido[0] in estoque:
            pagar += pedido[1] * estoque[pedido[0]]
    print(f"{pagar:.2f}")

if __name__ == "__main__":
    main()
