def main():
    a, b, c = map(float, input().split())
    def verificar(a, b, c):
        return a + b > c and b + c > a and a + c > b
        
    if verificar(a, b, c):
        resultado = f"Perimetro = {a + b + c:.1f}"
    else:
        tp = (a + b) * c / 2
        resultado = f"Area = {tp:.1f}"
   
    print(resultado)

if __name__ == "__main__":
    main()
