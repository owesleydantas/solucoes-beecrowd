def main
    alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    l = gets.chomp
    for letra in alfabeto
        if letra.upcase == l
            puts alfabeto.index(letra) + 1
            break
        end
    end
end

main