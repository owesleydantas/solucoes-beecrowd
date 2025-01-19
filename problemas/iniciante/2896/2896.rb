def main
    t = gets.to_i
    t.times do
        n, k = gets.split.map(&:to_i)
        garrafas = n
        vazias = n

        while vazias >= k
            novas = garrafas / k
            garrafas += novas
            vazias = (vazias % k) + novas
            break
        end

        puts vazias
    end
end

main