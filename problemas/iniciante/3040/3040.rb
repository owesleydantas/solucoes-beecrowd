def main
    n = gets.to_i
    n.times do
        a, d, g = gets.split.map(&:to_i)
        if (200 <= a and a <= 300) and d >= 50 and g >= 150
            puts 'Sim'
        else
            puts 'Nao'
        end
    end
end

main