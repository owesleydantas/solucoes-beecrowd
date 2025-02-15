def main
    rules = {
        "tesoura" => {
            "pedra" => "perdeu",
            "lagarto" => "ganhou",
            "papel" => "ganhou",
            "Spock" => "perdeu",
            "tesoura" => "empate"
        },
        "papel"=> {
            "pedra" => "ganhou",
            "tesoura" => "perdeu",
            "Spock" => "ganhou",
            "lagarto" => "perdeu",
            "papel" => "empate"
        },
        "pedra"=> {
            "pedra" => "empate",
            "tesoura" => "ganhou",
            "Spock" => "perdeu",
            "lagarto" => "ganhou",
            "papel" => "perdeu"
        },
        "lagarto" => {
            "pedra" => "perdeu",
            "tesoura" => "perdeu",
            "Spock" => "ganhou",
            "lagarto" => "empate",
            "papel" => "ganhou"
        },
        "Spock"=> {
            "pedra" => "ganhou",
            "tesoura" => "ganhou",
            "Spock" => "empate",
            "lagarto" => "perdeu",
            "papel" => "perdeu"
        }
    }

    t = gets.to_i
    t += 1
    (1..t).each do |i|
        input = gets
        break if input.nil? || input.empty?
        sheldon, raj = input.split.map(&:strip)
        result = "Caso ##{i}: "
        case rules[sheldon][raj]
        when "perdeu"
            result += "Raj trapaceou!"
        when "empate"
            result += "De novo!"
        when "ganhou"
            result += "Bazinga!"
        end
        puts result
    end
end

main