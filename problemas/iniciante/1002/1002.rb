def main
    raio = gets.to_f
    pi = 3.14159

    area = pi * (raio ** 2)
    puts "A=#{format('%.4f', area)}"
end

main