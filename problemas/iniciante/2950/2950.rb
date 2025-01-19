def main
    n, x, y = gets.split.map(&:to_i)
    result = n.to_f / (x + y)
    puts sprintf('%.2f', result)
end

main