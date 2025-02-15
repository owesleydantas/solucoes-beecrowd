def main():
    rules = {
        "tesoura" : {
            "pedra": "perdeu",
            "lagarto": "ganhou",
            "papel": "ganhou",
            "Spock": "perdeu",
            "tesoura": "empate"
        },
        "papel": {
            "pedra": "ganhou",
            "tesoura": "perdeu",
            "Spock": "ganhou",
            "lagarto": "perdeu",
            "papel": "empate"
        },
        "pedra": {
            "pedra": "empate",
            "tesoura": "ganhou",
            "Spock": "perdeu",
            "lagarto": "ganhou",
            "papel": "perdeu"
        },
        "lagarto": {
            "pedra": "perdeu",
            "tesoura": "perdeu",
            "Spock": "ganhou",
            "lagarto": "empate",
            "papel": "ganhou"
        },
        "Spock": {
            "pedra": "ganhou",
            "tesoura": "ganhou",
            "Spock": "empate",
            "lagarto": "perdeu",
            "papel": "perdeu"
        }
    }

    T = int(input())
    for game in range(1, T + 1):
        sheldon, raj = map(str, input().split())
        print(f"Caso #{game}: ", end='')
        if rules[sheldon][raj] == "perdeu":
            print("Raj trapaceou!")
        elif rules[sheldon][raj] == "ganhou":
            print("Bazinga!")
        elif rules[sheldon][raj] == "empate":
            print("De novo!")

main()
