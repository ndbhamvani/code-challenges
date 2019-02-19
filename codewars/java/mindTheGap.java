/*Task:
You must implement a function that receives the sequence of carriages as a string of carriage letters and returns the 
number of missing carriages. The train carriages are initially lettered from 'A' onwards with no gaps. 
Several carriages may be missing, but the remaining carriages are in their original sequence order. 
The highest-lettered carriage can never be missing (because that is where the engine is). 
The number of carriages in a train can vary from 1 to 26 (i.e. 'A' to 'Z').

Examples:
countMissingCarriages("ABC") should return 0 because all carriages are present.
countMissingCarriages("ABD") should return 1 because carriage C is missing.
countMissingCarriages("BCF") should return 3 because carriages A, D, and E are 
*/

public class TrainInspector {

  public static int countMissingCarriages(String train) {
    
    String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    int end = alphabet.indexOf(train.charAt(train.length()-1));
  
    return end+1 - train.length();
  }

}
