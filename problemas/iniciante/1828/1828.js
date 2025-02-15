process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = "";

process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    let lines = input.split('\n');
    let rules = {
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

    let T = parseInt(lines.shift());

    for (let i = 1; i <= T; ++i) {
        let [sheldon, raj] = lines.shift().trim().split(' ');
        let result = `Caso #${i}: `

        switch (rules[sheldon][raj]) {
            case "ganhou": result += "Bazinga!";
            break;
            case "empate": result += "De novo!";
            break;
            case "perdeu": result += "Raj trapaceou!";
            break
        }
        console.log(result)
    }
    
});
