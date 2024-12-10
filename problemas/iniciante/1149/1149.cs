using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static int somaPA(int a0, int n){
        int an = a0 + n - 1;

        return (a0 + an) * n / 2;

    }

    static void Main(string[] args)
    {
        string[] valores = Console.ReadLine().Trim().Split(' ');

        int A = int.Parse(valores[0]);
        int N = 0;

        for (int i = 1; i < valores.Length; i++){
            N = int.Parse(valores[i]);

            if (N > 0){
                break;
            }

        }
        Console.WriteLine(somaPA(A, N));
    }
}