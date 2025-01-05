def main
    loop do
      begin
        input = gets.chomp
        break if input.nil? || input.strip.empty?
  
        a, b, c = input.split.map(&:to_i)
        break if a == 0
  
        result = Math.sqrt(a * b * 100.0 / c).floor
        puts result
  
      rescue StandardError
        break
      end
    end
  end
  
  main