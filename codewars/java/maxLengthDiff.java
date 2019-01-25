/*You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. 
Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13*/

import java.util.*;

class MaxDiffLength {
    
    public static int mxdiflg(String[] a1, String[] a2) {
    
        if (a1.length < 1 || a2.length < 1) {
          return -1;
        }
        
        HashSet<Integer> a1Set = new HashSet<Integer>(); 
        HashSet<Integer> a2Set = new HashSet<Integer>();  
 
        for (int i = 0; i<a1.length; i++) {  
            a1Set.add(a1[i].length());
        }
        
        for (int i = 0; i<a2.length; i++) {  
            a2Set.add(a2[i].length());
        }
        
        int a1Max = Collections.max(a1Set);
        int a2Max = Collections.max(a2Set);
        int a1Min = Collections.min(a1Set);
        int a2Min = Collections.min(a2Set);
        
        if (a1Max - a2Min > a2Max - a1Min) { 
          return a1Max - a2Min;  
        }
        else {
          return a2Max - a1Min; 
        }
 
    }
}
