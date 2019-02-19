/* Task:
Given a 'long' number, Return The Maximum number that could be formed from the digits given.

Notes:
Only Positve numbers passed to the function , numbers Contain digits [1:9] inclusive.
Digit Duplications could occur, So also consider it when forming the Largest.

Input >> Output Examples:
1- maxNumber (17693284) ==> return (98764321)

Explanation:
As 98764321 is The Maximum number could be formed from the digits of the number 17693284.*/

import java.util.*;

public class Solution {
    public static long maxNumber(long n) {
        
        ArrayList list = new ArrayList();
        String nStr = String.valueOf(n);
        String[] nArr = nStr.split("");
        
       for (String x : nArr) {
          list.add(x);
        }
        
        Collections.sort(list, Collections.reverseOrder());
        String joined = String.join("", list);
        long result = Long.parseLong(joined);
        
        return result;
        
    }
}

