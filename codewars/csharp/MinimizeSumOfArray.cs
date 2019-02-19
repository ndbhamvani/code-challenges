// Given an array of intgers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes:
// Array/list will contain positives only .
// Array/list always has even size

// Examples:
// 1- minSum({5,4,2,3}) ==> (5*2 + 4*3) ==> return (22)
// 2- minSum({12,6,10,26,3,24}) ==> (26*3 + 24*6 + 12*10) ==> return (342)
// 3- minSum({9,2,8,7,5,4,0,6}) ==> (9*0 + 8*2 +7*4 +6*5 = 74) ==> return (74)

using System;
using System.Linq;


class Kata
{
    public static int MinSum(int[] a)
    {
       
        Array.Sort(a);
        
        var a1 = a.Take(a.Length / 2).ToArray();
        var a2 = a.Skip(a.Length / 2).ToArray();
        
        Array.Reverse(a2);
        var result = 0;
        
        
        for(int i = 0; i < a.Length / 2; i++){
          result += a1[i]*a2[i];
        }
         
        return result;
    }
}
