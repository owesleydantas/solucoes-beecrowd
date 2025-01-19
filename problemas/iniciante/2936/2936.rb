def main
    array = [300, 1500, 600, 1000, 150]
    result = 0
    for porcao  in array do
        entrada = gets.to_i
        result += porcao * entrada
    end

    puts result + 225

end

main