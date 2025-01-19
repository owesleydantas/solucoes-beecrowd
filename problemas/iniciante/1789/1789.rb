def main
    loop do
        begin
            line = gets
            break if line.nil?
            l = Integer(line)
            valores = gets.split(' ').map(&:to_i)
            
            maior = valores.max
            if maior < 10
                puts 1
            elsif maior < 20
                puts 2
            else
                puts 3
            end
        rescue EOFError
            break
        end
    end
end

main