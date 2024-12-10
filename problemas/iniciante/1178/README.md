# 1178

Categoria: iniciante
Linguagem: javascript
Link: https://judge.beecrowd.com/pt/problems/view/1178

## Solution

```py
def main():
    X = float(input())
    for i in range(100):
        print(f"N[{i}] = {X:.4f}")
        X /= 2

if __name__ == "__main__":
    main()


```