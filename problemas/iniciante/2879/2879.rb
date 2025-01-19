def main
    n = gets.to_i
    vitorias = 0
    n.times do
        porta = gets.to_i
        vitorias += 1 if porta != 1
    end
    puts vitorias
end

main