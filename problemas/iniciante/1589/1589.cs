using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        int T = int.Parse(Console.ReadLine());

        for (int i = 0; i < T; ++i) {
            List<int> line = Console.ReadLine().Trim().Split(' ').Select((x) => int.Parse(x)).ToList();
            Console.WriteLine(line[0] + line[1]);
        }
    }
}