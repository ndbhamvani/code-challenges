/*
Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.
*/

import java.util.ArrayList;

class Kata {
  public static String countingSheep(int num) {
    
    String sheep = " sheep...";
    ArrayList<String> list = new ArrayList<String>();
    
    for(int i = 1; i <= num; i++){
       list.add(i+sheep); 
    }
    
    String sheepCount = "";
    
    for (String s : list){
      sheepCount += s;
    }
    
    return sheepCount;
  }
}
