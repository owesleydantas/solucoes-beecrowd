def verificar(a, b)
    tamanho = b.length
    ultimosDigitos = a[-tamanho..-1]

    return ultimosDigitos == b
end

def main
    n = gets.to_i
    n.times do
        a, b = gets.split
        puts verificar(a, b)? "encaixa": "nao encaixa"
    end
end

main