def main
    c = gets.to_i
    c.times do
        n = gets.to_i

        if n > 8000
            puts 'Mais de 8000!'
        else
            puts 'Inseto!'
        end
    end
end

main