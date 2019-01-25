/*Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

Complete the function getIssuer() that will use the values shown below to determine the card issuer 
for a given card number. If the number cannot be matched then the function should return the string Unknown.

| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
*/

public class Kata {
  public static String getIssuer(String cardNumber) {
    
    if (cardNumber.length() == 15 && 
        cardNumber.startsWith("34") || 
        cardNumber.startsWith("37")) {
                        return "AMEX";
    }
    else if (cardNumber.length() == 16) {
      if (cardNumber.startsWith("51") || 
          cardNumber.startsWith("52") ||
          cardNumber.startsWith("53") ||
          cardNumber.startsWith("54") ||
          cardNumber.startsWith("55")) {
                        return "Mastercard";
      }
      else if(cardNumber.startsWith("6011")) {
                        return "Discover";
      }
      else if (cardNumber.startsWith("4")) {
                        return "VISA";
      }
    }
    else if (cardNumber.length() == 13 && 
            cardNumber.startsWith("4")) {
                        return "VISA";
    }
    
    return "Unknown";
  }
}
