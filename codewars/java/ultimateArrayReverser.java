/*Task:
Given an array of strings, reverse them and their order in such way that their length 
stays the same as the length of the original inputs.

Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
*/

import java.util.*;

public class ArrayReverser
{
   public static String[] reverse(String[] a)
   {
//Part 1: Establishing original word lengths and setting up index values for later use.
       ArrayList<Integer> wordSize = new ArrayList<Integer>();
       ArrayList<Integer> index = new ArrayList<Integer>(); 
       int count = 0;
       for (int i=0; i<a.length-1; i++){
         wordSize.add(a[i].length());
         count += a[i].length();
         index.add(count);
       }
       
//Part 2: Reversing word order in array.
       Collections.reverse(Arrays.asList(a));
       
//Part 3: Reversing each individual word via String reversal methods. 
       String str = "";
       for (String s : a) {
           str += new StringBuilder(s).reverse();
       }

//Part 4: Seperating words with comma by taking previous index values (Part 1). 
       String strWithComma = "";
       for (int y = 0; y<index.size(); y++) {
           strWithComma += str.substring(index.get(y)-wordSize.get(y), index.get(y)) + ", ";
       }
       String result = strWithComma + str.substring(index.get(index.size()-1));
        
//Part 5: Returning result as an array by splitting string wherever there is comma. 
       return result.split(", ");
   }
}
