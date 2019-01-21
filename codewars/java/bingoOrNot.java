// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. 
// Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). 
// Write a function where you will win the game if your numbers can spell "BINGO". 
// They do not need to be in the right order in the input array). 
// Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

// Example:
// {1,2,3,4,5,6,7,8,9,10} => "LOSE"
// {21,13,2,7,5,14,7,15,9,10} => "WIN"

package com.codewars.julesnuggy;
import java.util.*;


public class BingoOrNot {
    public static String bingo(int[] numberArray){
      
    // b=2 because 'b' is 2nd character in alphabet, thus i=9, n=14, g=7, o=15. 
      int[] bingoArr = {2,9,14,7,15};
      ArrayList<Integer> list = new ArrayList<Integer>();


        for (int i = 0; i < numberArray.length; i++){
          for (int j = 0; j < bingoArr.length; j++){
            
            if (numberArray[i] == bingoArr[j]) {
              if(!list.contains(numberArray[i])){
                list.add(numberArray[i]);
              }
            }
          }  
        }
      
        if (list.size() == 5) {
          return "WIN";
        }
        else{
          return "LOSE";
        }
        
    }
}
