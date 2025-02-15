def ehDificil(palavra)
    vogais = ['a', 'e', 'i', 'o', 'u']
    consoantes = 0

    palavra.each_char do |letra|
        if !vogais.include?(letra.downcase)
            consoantes += 1
        else
            consoantes = 0
        end
        
        return true if consoantes >= 3
    end
    return false
end

def main
    n = gets.to_i
    n.times do
        sobrenome = gets&.chomp
        break if sobrenome.nil? || sobrenome.empty?

        if ehDificil(sobrenome)
            puts "#{sobrenome} nao eh facil"
        
        else 
           puts "#{sobrenome} eh facil"
        end
    end
end

main