def main():
    vetor = []
    for entrada in range(0, 100):
        try:
            entrada = float(input())
            vetor.append(entrada)
        except EOFError:
            break

    for i in range(0, len(vetor)):
        X = vetor[i]
        if X <= 10:
            print(f"A[{i}] = {X}")
if __name__ == "__main__":
    main()
