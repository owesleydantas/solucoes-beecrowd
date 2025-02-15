def main
    m = gets.to_i
    a = gets.to_i
    b = gets.to_i

    c = m - (a + b)

    if c > a and c > b
        puts c
    elsif a > b
        puts a
    else
        puts b
    end
end

main