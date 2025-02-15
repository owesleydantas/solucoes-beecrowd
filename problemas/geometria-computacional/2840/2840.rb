def main
    pi = 3.1415
    raio, litros = gets.split.map(&:to_i)
    volume = (4.0 / 3.0) * pi * raio ** 3

    puts (litros / volume).to_i
end

main