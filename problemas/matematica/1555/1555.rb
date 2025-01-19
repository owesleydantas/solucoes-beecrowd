def r(a, b)
    (3 * a) ** 2 + b * b
end

def b(a, b)
    2 * a * a + (5 * b) ** 2
end

def c(a, b)
    -100 * a + b ** 3
end

n = gets.to_i
n.times do
    x, y = gets.split.map(&:to_i)

    if r(x, y) > b(x, y) and r(x, y) > c(x, y)
        puts 'Rafael ganhou'
    elsif b(x, y) > c(x, y)
        puts 'Beto ganhou'
    else
        puts 'Carlos ganhou'
    end
end
