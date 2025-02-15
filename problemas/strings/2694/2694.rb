def pegaValores(string)
    a = "#{string[2]}#{string[3]}"
    b = "#{string[5]}#{string[6]}#{string[7]}"
    c = "#{string[11]}#{string[12]}"

    return a.to_i + b.to_i + c.to_i
end

def main
    n = gets.to_i
    n.times do
        entrada = gets&.chomp
        break if entrada.nil? || entrada.empty?

        puts pegaValores(entrada)
    end
end

main